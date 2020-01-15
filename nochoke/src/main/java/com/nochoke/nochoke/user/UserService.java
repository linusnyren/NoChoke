package com.nochoke.nochoke.user;

import com.nochoke.nochoke.allergy.Allergy;
import com.nochoke.nochoke.allergy.AllergyRepository;
import com.nochoke.nochoke.security.JwtGenerator;
import com.nochoke.nochoke.security.JwtUserDetails;
import com.nochoke.nochoke.security.JwtValidator;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.awt.event.ActionEvent;
import java.io.FileInputStream;
import java.io.InputStream;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Service
public class UserService {


    @Autowired
    UserRepository userRepository;
    @Autowired
    AllergyRepository allergyRepository;
    @Autowired
    JavaMailSender javaMailSender;
    @Autowired
    JwtGenerator jwtGenerator;
    @Autowired
    JwtValidator jwtValidator;


    public JSONObject register(UserEntity userEntity) throws JSONException {
        UserEntity userEntity1 = userRepository.findByEmailAndPassword(userEntity.getEmail(), userEntity.getPassword());
        if(userEntity1 == null){
            userRepository.save(userEntity);
            return new JSONObject().put("token", jwtGenerator.generate(userEntity));
        }
        else{
            return new JSONObject().put("token" ,jwtGenerator.generate(userEntity1));
        }
    }
    public void addUser(UserEntity userEntity) {
        userRepository.save(userEntity);
    }

    public UserEntityDTO changeUserEmail(String email) {
        UserEntity user = userRepository.findById(getLoggedInUserId());
        user.setEmail(email);
        return new UserEntityDTO(user);
    }

    public void changeUserPassword(String password, long id) {
        UserEntity user = userRepository.findById(id);
    }

    public UserEntityDTO addAllergyToUser(Allergy allergy) {
        UserEntity user = userRepository.findById(getLoggedInUserId());
        user.addAllergyToUser(allergy);
        allergyRepository.save(allergy);
        userRepository.save(user);
        return new UserEntityDTO(user);
    }
    public JSONObject login(UserEntityCredentials userEntityCredentials) throws JSONException {
        UserEntity userEntity = userRepository.findByEmailAndPassword(userEntityCredentials.getEmail(), userEntityCredentials.getPassword());
        String jwt = jwtGenerator.generate(userEntity);
        JSONObject json = new JSONObject();
        json.put("token", jwt);
        return json;
    }
    public UserEntityDTO getUser(UserEntity userEntity){
        return new UserEntityDTO(userRepository.findByEmailAndPassword(userEntity.getEmail(), userEntity.getPassword()));
    }
    public UserEntityDTO getUserByToken(){
        return new UserEntityDTO(userRepository.findById(getLoggedInUserId()));
    }
    public UserEntity getUserById(long id){
        return userRepository.findById(id);
    }

    public List<UserEntity> getAll() {
        return userRepository.findAll();
    }

    public UserEntityDTO removeAllergyFromUser(Allergy allergy) {
        UserEntity userEntity = userRepository.findById(getLoggedInUserId());
        userEntity.getAllergies().remove(allergy);
        userRepository.save(userEntity);
        return new UserEntityDTO(userEntity);
    }
    public long getLoggedInUserId(){
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        JwtUserDetails jwtUserDetails = (JwtUserDetails) principal;
        return jwtUserDetails.getId();
    }
    void sendWelcomeMail(String to, String userName) {
        /*SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
        simpleMailMessage.setTo(to);
        simpleMailMessage.setSubject("Välkommen till NoChoke, " + userName);
        simpleMailMessage.setText("VÄLKOMMEEEEN");
        javaMailSender.send(simpleMailMessage);*/
    }


}