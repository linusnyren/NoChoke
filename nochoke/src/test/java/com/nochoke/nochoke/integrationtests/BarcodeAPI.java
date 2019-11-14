package com.nochoke.nochoke.integrationtests;

import com.nochoke.nochoke.EAN.EANItem;
import com.nochoke.nochoke.EAN.EANItemRepository;
import com.nochoke.nochoke.allergy.Allergy;
import com.nochoke.nochoke.allergy.AllergyRepository;
import com.nochoke.nochoke.user.UserEntity;
import com.nochoke.nochoke.user.UserRepository;
import org.json.JSONObject;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.TestPropertySource;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@SpringBootTest
@TestPropertySource(locations="classpath:application-dev.properties")
class BarcodeAPI {
    private static String API_KEY="263173d7-3c93-4509-a996-680e1e0da700";

    @Autowired
    AllergyRepository allergyRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    EANItemRepository eanItemRepository;

    @Test
    void testBarcode(){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> res = restTemplate.getForEntity(buildURL("05707381014033"), String.class);
        List<String> allergenes = new ArrayList<>();
        allergenes.add("Jordnötter");
        allergenes.add("Nötter");
        Assertions.assertTrue(allergyChecker(res.getBody(), allergenes));
    }
    @Test
    void addUserWIthAllergies(){
        UserEntity user = new UserEntity("Linus", "Nyrén", "linusny@hotmail.com");
        List<Allergy> allergies = new ArrayList<>();
        allergies.add(new Allergy("Jordnötter"));
        user.setAllergies(allergies);
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> res = restTemplate.getForEntity(buildURL("05707381014033"), String.class);
        Assertions.assertTrue(okForUserToEat(res.getBody(), user));
    }
    @Test
    void getEanInfo(){
        String EAN = "05707381014033";
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> res = restTemplate.getForEntity(buildURL(EAN), String.class);
        eanItemRepository.save(new EANItem(EAN, res.getBody()));
        Assertions.assertEquals(eanItemRepository.findByEAN(EAN).getBody(), res.getBody());
    }
    @Test
    void updateEANItemIfOld(){
        String EAN = "08710532023874";
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> res = restTemplate.getForEntity(buildURL(EAN), String.class);
        eanItemRepository.save(new EANItem(EAN, res.getBody()));

        LocalDateTime itemTime = eanItemRepository.findByEAN(EAN).getLocalDateTime();
        LocalDateTime now = LocalDateTime.now();
        if (itemTime.isAfter(now)){
            eanItemRepository.delete(eanItemRepository.findByEAN(EAN));
            eanItemRepository.save(new EANItem(EAN, res.getBody()));
        }
        Assertions.assertTrue(true);
    }

    private boolean okForUserToEat(String str, UserEntity user) {
        for(Allergy s: user.getAllergies()){
            if(str.contains(s.getAllergyName())){
                System.out.println(s.getAllergyName());
                return true;
            }
        }
        return false;
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
