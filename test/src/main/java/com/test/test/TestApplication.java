package com.test.test;

import org.springframework.boot.SpringApplication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import com.test.test.entity.User;
import com.test.test.repository.UserRepository;
@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
@EnableMongoRepositories
public class TestApplication implements CommandLineRunner {
	@Autowired
	UserRepository repo;

	public static void main(String[] args) {
		SpringApplication.run(TestApplication.class, args);
	}
	public void run(String... args) throws Exception {

	}
}
