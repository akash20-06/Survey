package com.test.test.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.test.test.entity.User;
import com.test.test.repository.UserRepository;

import java.util.List;

import com.test.test.service.Userservice;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
@Autowired
    public Userservice userservices;

    @PostMapping("/")
    public  User createUser(@RequestBody User user){
        return userservices.adduser(user);
    }

    @GetMapping("/")
    public List<User> getAll() {
        return userservices.findAllUsers();
    }


    @PostMapping("/get_user")
    public ResponseEntity<String> getUser(@RequestBody User user) {
            User existingUser= userservices.findUserByEmail(user.getEmail());
            if(existingUser != null && existingUser.getPassword().equals(user.getPassword())) {
                return ResponseEntity.ok("Login succesfull");
            }
            else {
                return ResponseEntity.ok("Login failed");
            }
    }
}
