package com.nochoke.nochoke.user;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
    UserEntity findById(long id);
    UserEntity findByEmail(String email);
    UserEntity findByEmailAndPassword(String email, String password);
}
