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
    @GetMapping("/login")
    public String login(@RequestBody UserEntityCredentials userEntityCredentials){
        return userService.login(userEntityCredentials);
    }
    @GetMapping("/rest/getuser/{token}")
    public UserEntityDTO getUser(@PathVariable String token){
        return userService.getUserByToken(token);
    }

    @PostMapping("/rest/addAllergy/{token}")
    public UserEntityDTO addAllergyToUser(@RequestBody Allergy allergy, @PathVariable String token){
        return userService.addAllergyToUser(allergy, token);
    }
    @PostMapping("/rest/removeAllergy/{token}")
    public UserEntityDTO removeAllergyFromUser(@RequestBody Allergy allergy, @PathVariable String token){
        return userService.removeAllergyFromUser(allergy, token);
    }

    @PutMapping("/rest/changeUserEmail/{token}")
    public UserEntityDTO changeUserEmail(@RequestBody String email, @PathVariable String token) {
        System.out.println(email.toString());
        return userService.changeUserEmail(email, token);
    }

    @GetMapping("/rest/getall")
    public List<UserEntity> getAll(){
        return userService.getAll();
    }

}
