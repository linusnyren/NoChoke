package com.nochoke.nochoke.user;

import com.nochoke.nochoke.security.JwtUserDetails;
import org.springframework.security.core.context.SecurityContextHolder;

public final class UserLoggedIn {

    public static long getID(){
            Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            JwtUserDetails jwtUserDetails = (JwtUserDetails) principal;
            return jwtUserDetails.getId();
    }
}
