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
    @PostMapping("/user/add")
    public UserEntity addUser(@RequestBody UserEntity userEntity){
        return userService.addUser(userEntity);
    }
    @PostMapping("/user/addAllergy/{userid}")
    public UserEntity addAllergyToUser(@RequestBody Allergy allergy, @PathVariable long userid){
        return userService.addAllergyToUser(allergy, userid);
    }
    @PostMapping("/user/removeAllergy/{userid}")
    public UserEntity removeAllergyFromUser(@RequestBody Allergy allergy, @PathVariable long userid){
        return userService.removeAllergyFromUser(allergy, userid);
    }

    @PutMapping("user/changeUserEmail/{userid}")
    public UserEntity changeUserEmail(@RequestBody String email, @PathVariable long userid) {
        System.out.println(email.toString());
        return userService.changeUserEmail(email, userid);
    }

    @GetMapping("user/get/{userId}")
    public UserEntity getUser(@PathVariable long userId){
        return userService.getUser(userId);
    }

    @GetMapping("user/login/{email}")
    public UserEntity login(@PathVariable String email){
        return userService.login(email);
    }

    @GetMapping("user/getall")
    public List<UserEntity> getAll(){
        return userService.getAll();
    }

}
