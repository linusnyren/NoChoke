package com.nochoke.nochoke.user;

import com.nochoke.nochoke.allergy.Allergy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {
    @Autowired
    UserService userService;

    @CrossOrigin
    @PostMapping("/user/add")
    public UserEntity addUser(@RequestBody UserEntity userEntity){
        System.out.println(userEntity);
        return userService.addUser(userEntity);
    }
    @PostMapping("/user/addAllergy/{userid}")
    public UserEntity addAllergyToUser(@RequestBody Allergy allergy, @PathVariable long userid){
        return userService.addAllergyToUser(allergy, userid);
    }
    @GetMapping("user/get/{userId}")
    public UserEntity getUser(@PathVariable long userId){
        return userService.getUser(userId);
    }

}
