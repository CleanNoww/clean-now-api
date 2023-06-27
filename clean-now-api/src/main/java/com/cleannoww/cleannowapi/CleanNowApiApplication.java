package com.cleannoww.cleannowapi;

import com.cleannoww.cleannowapi.domain.Cliente;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CleanNowApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(CleanNowApiApplication.class, args);
    }

    Cliente c1= new Cliente();
}
