package com.nochoke.nochoke.security;

import com.nochoke.nochoke.user.UserEntity;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;

@Component
public class JwtGenerator {


    public String generate(UserEntity userEntity) {

        Claims claims = Jwts.claims()
                .setSubject(userEntity.getSurname());
                claims.put("id", String.valueOf(userEntity.getId()));
        String jwt = Jwts.builder()
                .setClaims(claims)
                .signWith(SignatureAlgorithm.HS512, "youtube")
                .compact();
        return jwt;
    }
}
