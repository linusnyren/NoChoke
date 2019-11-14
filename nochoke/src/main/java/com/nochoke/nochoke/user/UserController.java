package com.nochoke.nochoke.user;

import com.nochoke.nochoke.allergy.Allergy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping("/user/add")
    public UserEntity addUser(@RequestBody UserEntity userEntity){
        return userService.addUser(userEntity);
    }
    @PostMapping("/user/addAllergy/{userid}")
    public UserEntity addAllergyToUser(@RequestBody Allergy allergy, @PathVariable long userid){
        return userService.addAllergyToUser(allergy, userid);
    }

}
