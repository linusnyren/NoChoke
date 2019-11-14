package com.nochoke.nochoke.user;

import com.sun.javafx.collections.MappingChange;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;
import java.util.Map;
import java.util.Set;

@Data
@AllArgsConstructor
public class UserAllergyDTO {
    private Map<String, Boolean> allergyList;
    private String EAN, body;



}
