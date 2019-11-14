package com.nochoke.nochoke;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class NochokeApplication {

	public static void main(String[] args) {
		SpringApplication.run(NochokeApplication.class, args);
	}

}
