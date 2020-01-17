package com.nochoke.nochoke.allergy;

import com.nochoke.nochoke.apicaller.EAN_APICaller;
import com.nochoke.nochoke.history.History;
import com.nochoke.nochoke.history.HistoryService;
import com.nochoke.nochoke.security.JwtUserDetails;
import com.nochoke.nochoke.security.JwtValidator;
import com.nochoke.nochoke.user.UserEntity;
import com.nochoke.nochoke.user.UserService;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.slf4j.Marker;
import org.slf4j.MarkerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@Service
public class AllergyService {

    Logger logger = LoggerFactory.getLogger(AllergyService.class);
    static Marker SMTP_TRIGGER = MarkerFactory.getMarker("SMTP_TRIGGER");

    @Autowired
    EAN_APICaller ean_apiCaller;
    @Autowired
    UserService userService;
    @Autowired
    HistoryService historyService;
    @Autowired
    JwtValidator jwtValidator;

    public JSONObject getEANProduct(String ean){
        return ean_apiCaller.getProductByEan(ean);
    }

    public JSONObject okToEat(String ean) throws JSONException {
        UserEntity user = userService.getUserById(getLoggedInUserId());
        JSONObject json = ean_apiCaller.getProductByEan(ean);
        if(json.getJSONArray("Bilder").length() > 0){
            History history = new History(ean, LocalDateTime.now().toString());
            historyService.saveHistory(history);
            user.getHistoryList().add(history);
            userService.addUser(user);
        }
        try {
            json.put("allergyList", allergyChecker(user.getAllergies(), json));
            json.put("ean", ean);
            logger.info(user +" checked for allergy \n" +json.toString());
            return json;
        }
        catch(JSONException e){
            logger.error(SMTP_TRIGGER, e.getMessage());
            return null;
        }
    }

    public JSONObject getHistory(){
        UserEntity user = userService.getUserById(getLoggedInUserId());
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
            logger.error(SMTP_TRIGGER, e.getMessage());
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
            logger.error(SMTP_TRIGGER, e.getMessage());
            return null;
        }
    }
    public long getLoggedInUserId(){
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        JwtUserDetails jwtUserDetails = (JwtUserDetails) principal;
        return jwtUserDetails.getId();
    }
}