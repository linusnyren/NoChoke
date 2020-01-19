package com.nochoke.nochoke.apicaller;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import javax.transaction.Transactional;

@Component
public class EAN_APICaller implements EANFetcher {
    private RestTemplate restTemplate = new RestTemplate();
    private static String API_KEY="263173d7-3c93-4509-a996-680e1e0da700";
    private Logger logger = LoggerFactory.getLogger(EAN_APICaller.class);

    @Override
    @Transactional
    public JSONObject getProductByEan(String ean){
        ResponseEntity<String> res;
        try {
            res = restTemplate.getForEntity(buildEANURL(ean), String.class);
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

    @Override
    @Transactional
    public JSONArray getProductsByText(String text){
        ResponseEntity<String> res;
        try{
            res = restTemplate.getForEntity(buildTextURL(text), String.class);
        }
        catch (Exception e){
            logger.error(e.getMessage());
            throw new APIConnectionException("Couldnt fetch from API");
        }
        if(res.toString().contains("GTIN")){
            try{
                logger.info(res.getBody());
                return new JSONArray(res.getBody());
            }
            catch (JSONException e){
                System.out.println(e.getMessage());
                return null;
            }
        }
        else{
            throw new BadEANResponseException("Bad response while searching for text");
        }
    }


    private String buildEANURL(String EAN){
        return "http://api.dabas.com/DABASService/V2/article/gtin/"+EAN+"/JSON?apikey="+API_KEY;
    }
    private String buildTextURL(String text){
        return "http://api.dabas.com/DABASService/V2/articles/searchparameter/"+text+"/JSON?apikey="+API_KEY;
    }


}
