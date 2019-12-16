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

    @GetMapping("getEan/{EAN}")
    public String getEANProduct(@PathVariable String EAN){
        return allergyService.getEANProduct(EAN).toString();
    }

    @GetMapping("/okToEat/{userid}/{EAN}")
    public String okToEat(@PathVariable long userid, @PathVariable String EAN){
        return allergyService.okToEat(userid, EAN).toString();
    }
    @GetMapping("/getHistory/{userid}")
    public String getHistory(@PathVariable long userid){
        return allergyService.getHistory(userid).toString();
    }
}
