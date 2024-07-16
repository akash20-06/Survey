package com.test.test.service;
import com.test.test.entity.User;
import com.test.test.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.test.test.repository.CreateSurveyRepository;

import java.util.List;

@Service
public class Userservice {

    @Autowired
    private UserRepository repository;
    public  List<User> findAllUsers() {
        return repository.findAll();
    }
 public User adduser(User user) {

        return repository.save(user);
 }
  public  User findUserByEmail(String email) {

       User user= repository.findByEmail(email);
       if(user!=null){
           return  user;


        }
       return null;
  }
}