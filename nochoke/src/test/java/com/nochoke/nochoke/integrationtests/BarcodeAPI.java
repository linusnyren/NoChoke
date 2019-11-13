package com.nochoke.nochoke.integrationtests;

import org.json.JSONObject;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.TestPropertySource;
import org.springframework.web.client.RestTemplate;
import sun.jvm.hotspot.utilities.Assert;

import java.util.ArrayList;
import java.util.List;

@SpringBootTest
@TestPropertySource(locations="classpath:application-dev.properties")
class BarcodeAPI {
    private static String API_KEY="263173d7-3c93-4509-a996-680e1e0da700";

    @Test
    void testBarcode(){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> res = restTemplate.getForEntity(buildURL("04018077775703"), String.class);
        List<String> allergenes = new ArrayList<>();
        allergenes.add("Jordnötter");
        allergenes.add("Nötter");
        Assertions.assertTrue(allergyChecker(res.getBody(), allergenes));
    }
    private String buildURL(String EAN){
        return "http://api.dabas.com/DABASService/V2/article/gtin/"+EAN+"/JSON?apikey="+API_KEY;
    }
    private boolean allergyChecker(String str, List<String> allergenes){
        for(String s : allergenes){
            if(str.contains(s)){
                return true;
            }
        }
        return false;
    }
}
