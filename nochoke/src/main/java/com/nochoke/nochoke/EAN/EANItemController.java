package com.nochoke.nochoke.EAN;

import com.nochoke.nochoke.user.UserAllergyDTO;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EANItemController {

    @Autowired
    EANService eanService;

    @GetMapping("getEan/{EAN}")
    public String getEANProduct(@PathVariable String EAN) throws JSONException {
        return eanService.getEANProduct(EAN).toString();
    }

    @GetMapping("/okToEat/{userid}/{EAN}")
    public String okToEat(@PathVariable long userid, @PathVariable String EAN) throws JSONException {
        return eanService.okToEat(userid, EAN).toString();
    }
    @GetMapping("/getHistory/{userid}")
    public String getHistory(@PathVariable long userid) throws JSONException {
        return eanService.getHistory(userid).toString();
    }

}
