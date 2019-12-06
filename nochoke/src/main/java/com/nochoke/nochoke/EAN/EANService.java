package com.nochoke.nochoke.EAN;

import com.nochoke.nochoke.allergy.Allergy;
import com.nochoke.nochoke.apicaller.EAN_APICaller;
import com.nochoke.nochoke.history.History;
import com.nochoke.nochoke.history.HistoryService;
import com.nochoke.nochoke.user.UserEntity;
import com.nochoke.nochoke.user.UserService;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class EANService{

    @Autowired
    EAN_APICaller ean_apiCaller;
    @Autowired
    UserService userService;
    @Autowired
    HistoryService historyService;

    public JSONObject getEANProduct(String ean) throws JSONException {
        return ean_apiCaller.getProductByEan(ean).put("ean", ean);
    }

    public JSONObject okToEat(long userId, String ean) throws JSONException {
        UserEntity user = userService.getUser(userId);
        LocalDateTime now = LocalDateTime.now();
        System.out.println("ok to eat" +now.toString());
        History history = new History(ean, LocalDateTime.now().toString());
        System.out.println(LocalDateTime.now());
        historyService.saveHistory(history);
        user.getHistoryList().add(history);
        userService.addUser(user);
        JSONObject json = ean_apiCaller.getProductByEan(ean);
        JSONArray allergyArray = new JSONArray();
        int id= 1;
        for(Allergy s : user.getAllergies()) {
            JSONObject jsonArray = new JSONObject();
            jsonArray.put("allergyName", s.getAllergyName());
            jsonArray.put("contain", json.toString().toLowerCase().contains(s.getAllergyName().toLowerCase()));
            jsonArray.put("id", id);
            id++;
            allergyArray.put(jsonArray);
        }
        json.put("allergyList", allergyArray);
        json.put("ean", ean);
        return json;
    }

    public JSONObject getHistory(long userid) throws JSONException {
        UserEntity user = userService.getUser(userid);
        JSONArray jsonArray = new JSONArray();
        for(History history : user.getHistoryList()){
            JSONObject json = ean_apiCaller.getProductByEan(history.getEan());
            System.out.println(history.getDateTime());
            System.out.println(history.getId());
            System.out.println(history);
            json.put("date", history.getDateTime());
            json.put("id", history.getId());
            jsonArray.put(json);
        }
        return new JSONObject().put("historyList",jsonArray);
    }
}
