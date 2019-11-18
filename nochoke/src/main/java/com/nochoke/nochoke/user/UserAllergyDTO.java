package com.nochoke.nochoke.user;

import com.fasterxml.jackson.databind.util.JSONPObject;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.json.JSONObject;

import java.util.List;
import java.util.Map;
import java.util.Set;

@Data
public class UserAllergyDTO {
    private Map<String, Boolean> allergyList;
    private String EAN;
    private JSONObject body;
    public UserAllergyDTO(Map<String, Boolean> allergyList, String EAN, JSONObject body) {
        this.allergyList = allergyList;
        this.EAN = EAN;
        this.body = body;
    }


}
