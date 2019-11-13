package com.nochoke.nochoke.EAN;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
public class EANItem {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String EAN;
    @Lob
    private String body;
    private LocalDateTime localDateTime = LocalDateTime.now();

    public EANItem(String EAN, String body){
        this.EAN = EAN;
        this.body = body;
    }
}
