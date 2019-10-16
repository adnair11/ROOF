package com.ibm.roof;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class RoofApplication {

	public static void main(String[] args) {
		SpringApplication.run(RoofApplication.class, args);
		System.out.println("ROOF IS NOW LOADING>>>>");
	}

}
