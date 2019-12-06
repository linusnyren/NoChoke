package com.nochoke.nochoke.user;

import com.nochoke.nochoke.allergy.Allergy;
import com.nochoke.nochoke.allergy.AllergyRepository;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    AllergyRepository allergyRepository;

    public UserEntity addUser(UserEntity userEntity) {
        userRepository.save(userEntity);
        return userEntity;
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
}
