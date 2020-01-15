package com.nochoke.nochoke.allergy;

import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AllergyController {
    @Autowired
    AllergyService allergyService;

    @GetMapping("/rest/getEan/{EAN}")
    public String getEANProduct(@PathVariable String EAN){
        return allergyService.getEANProduct(EAN).toString();
    }

    @GetMapping("/rest/okToEat/{token}/{EAN}")
    public String okToEat(@PathVariable String token, @PathVariable String EAN){
        return allergyService.okToEat(token, EAN).toString();
    }
    @GetMapping("/rest/getHistory/{token}")
    public String getHistory(@PathVariable String token){
        return allergyService.getHistory(token).toString();
    }
}
