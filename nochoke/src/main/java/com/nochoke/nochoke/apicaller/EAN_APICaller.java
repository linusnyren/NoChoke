package com.nochoke.nochoke.apicaller;

import com.nochoke.nochoke.EAN.EANItem;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class EAN_APICaller implements EANFetcher {
    RestTemplate restTemplate = new RestTemplate();
    private static String API_KEY="263173d7-3c93-4509-a996-680e1e0da700";

    @Override
    public EANItem getProductByEan(String EAN) {
        ResponseEntity<String> res = restTemplate.getForEntity(buildURL(EAN), String.class);
        return new EANItem(EAN, res.getBody());
    }

    private String buildURL(String EAN){
        return "http://api.dabas.com/DABASService/V2/article/gtin/"+EAN+"/JSON?apikey="+API_KEY;
    }
}
