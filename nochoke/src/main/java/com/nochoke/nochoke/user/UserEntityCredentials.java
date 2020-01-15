package com.nochoke.nochoke.user;

import lombok.Data;

@Data
public class UserEntityCredentials {

    private String email, password;

    public UserEntityCredentials(String email, String password) {
        this.email=email;
        this.password = password;
    }
}
