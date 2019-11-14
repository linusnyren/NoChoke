package com.nochoke.nochoke.EAN;

import com.nochoke.nochoke.allergy.Allergy;
import com.nochoke.nochoke.apicaller.EANFetcher;
import com.nochoke.nochoke.apicaller.EAN_APICaller;
import com.nochoke.nochoke.user.UserAllergyDTO;
import com.nochoke.nochoke.user.UserEntity;
import com.nochoke.nochoke.user.UserRepository;
import com.nochoke.nochoke.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class EANService{

    @Autowired
    EAN_APICaller ean_apiCaller;
    @Autowired
    UserService userService;

    public EANItem getEANProduct(String ean) {
        return ean_apiCaller.getProductByEan(ean);
    }

    public UserAllergyDTO okToEat(long userId, String ean) {
        UserEntity user = userService.getUser(userId);
        EANItem eanItem = ean_apiCaller.getProductByEan(ean);
        Map<String, Boolean> list = new HashMap<>();
        System.out.println(user.getAllergies().size());
        for (Allergy s : user.getAllergies()) {
            boolean contain = eanItem.getBody().toLowerCase().contains(s.getAllergyName().toLowerCase());
            list.put(s.getAllergyName(), contain);
        }
        return new UserAllergyDTO(list, ean, eanItem.getBody());

    }
}
