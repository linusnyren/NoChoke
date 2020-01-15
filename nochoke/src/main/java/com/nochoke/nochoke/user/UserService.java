package com.nochoke.nochoke.user;

import com.nochoke.nochoke.allergy.Allergy;
import com.nochoke.nochoke.allergy.AllergyRepository;
import com.nochoke.nochoke.security.JwtGenerator;
import com.nochoke.nochoke.security.JwtValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
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



    public String addUser(UserEntity userEntity) {
        userRepository.save(userEntity);
        return jwtGenerator.generate(userEntity);
    }

    public UserEntityDTO changeUserEmail(String email, String token) {
        UserEntity user = userRepository.findById(jwtValidator.validate(token).getId());
        user.setEmail(email);
        return new UserEntityDTO(user);
    }

    public void changeUserPassword(String password, long id) {
        UserEntity user = userRepository.findById(id);
    }

    public UserEntityDTO addAllergyToUser(Allergy allergy, String token) {
        UserEntity user = userRepository.findById(jwtValidator.validate(token).getId());
        user.addAllergyToUser(allergy);
        allergyRepository.save(allergy);
        userRepository.save(user);
        return new UserEntityDTO(user);
    }
    public String login(UserEntityCredentials userEntityCredentials){
        UserEntity userEntity = userRepository.findByEmailAndPassword(userEntityCredentials.getEmail(), userEntityCredentials.getPassword());
        String jwt = jwtGenerator.generate(userEntity);
        return jwt;
    }
    public UserEntityDTO getUser(UserEntity userEntity){
        return new UserEntityDTO(userRepository.findByEmailAndPassword(userEntity.getEmail(), userEntity.getPassword()));
    }
    public UserEntityDTO getUserByToken(String token){
        UserEntity userEntity = jwtValidator.validate(token);
        return new UserEntityDTO(userRepository.findByEmailAndPassword(userEntity.getEmail(), userEntity.getPassword()));
    }
    public UserEntity getUserById(long id){
        return userRepository.findById(id);
    }

    public List<UserEntity> getAll() {
        return userRepository.findAll();
    }

    public UserEntityDTO removeAllergyFromUser(Allergy allergy, String token) {
        UserEntity userEntity = userRepository.findById(jwtValidator.validate(token).getId());
        userEntity.getAllergies().remove(allergy);
        userRepository.save(userEntity);
        return new UserEntityDTO(userEntity);
    }
    void sendWelcomeMail(String to, String userName) {
        /*SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
        simpleMailMessage.setTo(to);
        simpleMailMessage.setSubject("Välkommen till NoChoke, " + userName);
        simpleMailMessage.setText("VÄLKOMMEEEEN");
        javaMailSender.send(simpleMailMessage);*/
    }

}