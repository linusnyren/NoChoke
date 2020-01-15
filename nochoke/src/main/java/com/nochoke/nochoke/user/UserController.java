package com.nochoke.nochoke.user;

import com.nochoke.nochoke.allergy.Allergy;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    UserService userService;

    @CrossOrigin
    @PostMapping("/register")
    public String addUser(@RequestBody UserEntity userEntity){
        return userService.addUser(userEntity);
    }

    @CrossOrigin
    @PostMapping("/login")
    public String login(@RequestBody UserEntityCredentials userEntityCredentials){
        return userService.login(userEntityCredentials);
    }
    @GetMapping("/rest/getuser/")
    public UserEntityDTO getUser(){
        return userService.getUserByToken();
    }

    @PostMapping("/rest/addAllergy/")
    public UserEntityDTO addAllergyToUser(@RequestBody Allergy allergy){
        return userService.addAllergyToUser(allergy);
    }
    @PostMapping("/rest/removeAllergy/")
    public UserEntityDTO removeAllergyFromUser(@RequestBody Allergy allergy){
        return userService.removeAllergyFromUser(allergy);
    }

    @PutMapping("/rest/changeUserEmail/")
    public UserEntityDTO changeUserEmail(@RequestBody String email) {
        return userService.changeUserEmail(email);
    }
}
