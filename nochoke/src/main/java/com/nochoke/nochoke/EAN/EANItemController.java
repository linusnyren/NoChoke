package com.nochoke.nochoke.EAN;

import com.nochoke.nochoke.user.UserAllergyDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class EANItemController {

    @Autowired
    EANService eanService;

    @GetMapping("/hello")
    public String testAPI(){
        return "Hello world!";
    }
    @GetMapping("/")
    public EANItem getEANProduct(@RequestBody String EAN){
        return eanService.getEANProduct(EAN);
    }
    @PostMapping("/okToEat/{userid}")
    public UserAllergyDTO okToEat(@PathVariable long userid, @RequestBody String EAN){
        return eanService.okToEat(userid, EAN);
    }

}
