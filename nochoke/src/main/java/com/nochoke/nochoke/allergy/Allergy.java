package com.nochoke.nochoke.allergy;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@Entity
@Data
@AllArgsConstructor
public class Allergy{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String allergyName;

    public Allergy(String allergyName){
        this.allergyName=allergyName;
    }
}
