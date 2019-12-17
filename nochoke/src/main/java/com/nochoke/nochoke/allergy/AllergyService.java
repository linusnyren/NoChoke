package com.nochoke.nochoke.allergy;

import com.nochoke.nochoke.apicaller.EAN_APICaller;
import com.nochoke.nochoke.history.History;
import com.nochoke.nochoke.history.HistoryService;
import com.nochoke.nochoke.user.UserEntity;
import com.nochoke.nochoke.user.UserService;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class AllergyService {

    Logger logger = LoggerFactory.getLogger(AllergyService.class);

    @Autowired
    EAN_APICaller ean_apiCaller;
    @Autowired
    UserService userService;
    @Autowired
    HistoryService historyService;

    public JSONObject getEANProduct(String ean){
        return ean_apiCaller.getProductByEan(ean);
    }

    public JSONObject okToEat(long userId, String ean){
        UserEntity user = userService.getUser(userId);
        History history = new History(ean, LocalDateTime.now().toString());
        historyService.saveHistory(history);
        user.getHistoryList().add(history);
        userService.addUser(user);
        JSONObject json = ean_apiCaller.getProductByEan(ean);
        try {
            json.put("allergyList", allergyChecker(user.getAllergies(), json));
            json.put("ean", ean);
            return json;
        }
        catch(JSONException e){
            logger.error(e.getMessage());
            return null;
        }
    }

    public JSONObject getHistory(long userid){
        UserEntity user = userService.getUser(userid);
        JSONArray jsonArray = new JSONArray();
        try {
            for (History history : user.getHistoryList()) {
                JSONObject json = ean_apiCaller.getProductByEan(history.getEan());
                json.put("date", history.getDateTime());
                json.put("id", history.getId());
                json.put("allergyList", allergyChecker(user.getAllergies(), json));
                jsonArray.put(json);
            }
            return new JSONObject().put("historyList", jsonArray);
        }
        catch (JSONException e){
            logger.error(e.getMessage());
            return null;
        }
    }
    private JSONArray allergyChecker(List<Allergy> allergyList, JSONObject json){
        try {
            JSONArray allergyArray = new JSONArray();
            int id = 1;
            for (Allergy s : allergyList) {
                JSONObject jsonArray = new JSONObject();
                jsonArray.put("allergyName", s.getAllergyName());
                jsonArray.put("contain", json.toString().toLowerCase().contains(s.getAllergyName().toLowerCase()));
                jsonArray.put("id", id);
                id++;
                allergyArray.put(jsonArray);
            }
            return allergyArray;
        }
        catch(JSONException e){
            logger.error(e.getMessage());
            return null;
        }
    }
}