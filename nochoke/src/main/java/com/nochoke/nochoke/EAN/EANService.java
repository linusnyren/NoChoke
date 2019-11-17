package com.nochoke.nochoke.EAN;

import com.nochoke.nochoke.allergy.Allergy;
import com.nochoke.nochoke.apicaller.EAN_APICaller;
import com.nochoke.nochoke.user.UserEntity;
import com.nochoke.nochoke.user.UserService;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EANService{

    @Autowired
    EAN_APICaller ean_apiCaller;
    @Autowired
    UserService userService;

    public JSONObject getEANProduct(String ean) throws JSONException {
        return ean_apiCaller.getProductByEan(ean).put("ean", ean);
    }

    public JSONObject okToEat(long userId, String ean) throws JSONException {
        UserEntity user = userService.getUser(userId);
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
}
