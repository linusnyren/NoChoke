package com.nochoke.nochoke.user;

import com.nochoke.nochoke.allergy.Allergy;
import com.nochoke.nochoke.allergy.AllergyRepository;
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



    public UserEntity addUser(UserEntity userEntity) {
        userRepository.save(userEntity);
        sendWelcomeMail(userEntity.getEmail().toLowerCase(), userEntity.getSurname());
        return userEntity;
    }

    public UserEntity changeUserEmail(String email, long id) {
        UserEntity user = userRepository.findById(id);
        user.setEmail(email);
        return user;
    }

    public void changeUserPassword(String password, long id) {
        UserEntity user = userRepository.findById(id);
    }

    public UserEntity addAllergyToUser(Allergy allergy, long userid) {
        UserEntity user = userRepository.findById(userid);
        user.addAllergyToUser(allergy);
        allergyRepository.save(allergy);
        userRepository.save(user);
        return user;
    }
    public UserEntity getUser(long id){
        return userRepository.findById(id);
    }

    public UserEntity login(String email) {
        return userRepository.findByEmail(email);
    }

    public List<UserEntity> getAll() {
        return userRepository.findAll();
    }

    public UserEntity removeAllergyFromUser(Allergy allergy, long userid) {
        UserEntity userEntity = userRepository.findById(userid);
        userEntity.getAllergies().remove(allergy);
        userRepository.save(userEntity);
        return userEntity;
    }
    void sendWelcomeMail(String to, String userName) {
        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
        simpleMailMessage.setTo(to);
        simpleMailMessage.setSubject("Välkommen till NoChoke, " + userName);
        simpleMailMessage.setText("VÄLKOMMEEEEN");
        javaMailSender.send(simpleMailMessage);
    }

}