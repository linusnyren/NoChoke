package com.nochoke.nochoke.security;

import com.nochoke.nochoke.user.UserEntity;
import com.nochoke.nochoke.user.UserRepository;
import com.nochoke.nochoke.user.UserService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class JwtValidator {

    @Autowired
    UserService userService;
    private String secret = "youtube";

    public UserEntity validate(String token) {
        UserEntity userEntity = null;
        try {
            Claims body = Jwts.parser()
                    .setSigningKey(secret)
                    .parseClaimsJws(token)
                    .getBody();
            long id = Long.parseLong(body.get("id").toString());
            userEntity = userService.getUserById(id);
        }
        catch (Exception e) {
            System.out.println("KRASH!" +e.getMessage());
        }

        return userEntity;
    }
}
