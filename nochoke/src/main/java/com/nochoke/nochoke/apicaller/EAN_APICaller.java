package com.nochoke.nochoke.apicaller;

import com.nochoke.nochoke.EAN.EANItem;
import com.nochoke.nochoke.EAN.EANItemRepository;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import javax.transaction.Transactional;
import java.time.LocalDateTime;

@Component
public class EAN_APICaller implements EANFetcher {
    RestTemplate restTemplate = new RestTemplate();
    private static String API_KEY="263173d7-3c93-4509-a996-680e1e0da700";
    @Autowired
    EANItemRepository eanItemRepository;

    @Override
    @Transactional
    public JSONObject getProductByEan(String ean) throws JSONException {
        ResponseEntity<String> res = restTemplate.getForEntity(buildURL(ean), String.class);
        return new JSONObject(res.getBody());
    }

    private String buildURL(String EAN){
        return "http://api.dabas.com/DABASService/V2/article/gtin/"+EAN+"/JSON?apikey="+API_KEY;
    }


}
