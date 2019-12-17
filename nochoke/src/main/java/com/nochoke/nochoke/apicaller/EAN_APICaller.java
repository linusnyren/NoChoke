package com.nochoke.nochoke.apicaller;

import com.nochoke.nochoke.allergy.AllergyService;
import org.json.JSONException;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.Objects;

@Component
public class EAN_APICaller implements EANFetcher {
    RestTemplate restTemplate = new RestTemplate();
    private static String API_KEY="263173d7-3c93-4509-a996-680e1e0da700";
    Logger logger = LoggerFactory.getLogger(EAN_APICaller.class);

    @Override
    @Transactional
    public JSONObject getProductByEan(String ean){
        ResponseEntity<String> res;
        try {
            res = restTemplate.getForEntity(buildURL(ean), String.class);
        }
        catch(Exception e){
            logger.error(e.getMessage());
            throw new APIConnectionException("Couldnt fetch from API");
        }
        if(res.toString().contains("Varumarke")){
            try {
                logger.info(res.getBody());
                return new JSONObject(res.getBody()).put("ean", ean);
            }
            catch(JSONException e){
                System.out.println(e.getMessage());
                return null;
            }
        }
        else{
            throw new BadEANResponseException("Bad response from API");
        }
    }

    private String buildURL(String EAN){
        return "http://api.dabas.com/DABASService/V2/article/gtin/"+EAN+"/JSON?apikey="+API_KEY;
    }


}
