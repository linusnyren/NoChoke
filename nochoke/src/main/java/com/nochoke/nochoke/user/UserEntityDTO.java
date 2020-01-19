package com.nochoke.nochoke.user;

import com.nochoke.nochoke.allergy.Allergy;
import com.nochoke.nochoke.history.History;
import lombok.Data;


import java.util.List;

@Data
public class UserEntityDTO extends UserEntity {
    private long id;
    private String surname, lastname, email;
    private List<Allergy> allergies;
    private List<History> historyList;

    public UserEntityDTO(UserEntity userEntity){
        this.id = userEntity.getId();
        this.surname = userEntity.getSurname();
        this.lastname = userEntity.getLastname();
        this.allergies = userEntity.getAllergies();
        this.historyList = userEntity.getHistoryList();
        this.email = userEntity.getEmail();
    }
}
