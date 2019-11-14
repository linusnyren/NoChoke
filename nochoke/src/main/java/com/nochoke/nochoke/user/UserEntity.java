package com.nochoke.nochoke.user;

import com.nochoke.nochoke.allergy.Allergy;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String surname, lastname, email;

    @ManyToMany
    private List<Allergy> allergies;

    public UserEntity(String surname, String lastname, String email) {
        this.surname = surname;
        this.lastname = lastname;
        this.email = email;
    }
    public void addAllergyToUser(Allergy allergy){
        this.allergies.add(allergy);
    }

}
