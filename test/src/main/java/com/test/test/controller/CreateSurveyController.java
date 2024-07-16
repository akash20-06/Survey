package com.test.test.controller;

import com.test.test.repository.CreateSurveyRepository;
import com.test.test.service.CreateSurveyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.test.test.entity.User;
import com.test.test.repository.UserRepository;

import java.util.List;
import com.test.test.entity.CreateSurvey;

import com.test.test.service.Userservice;

@RestController
@RequestMapping("/api/users")
public class CreateSurveyController {
  @Autowired
    private CreateSurveyRepository createSurveyRepository;

    @Autowired
    private CreateSurveyService createSurveyService;



    @PostMapping("/create_user")
    public CreateSurvey createUser(@RequestBody CreateSurvey user){
        return createSurveyService.addsurvey(user);
    }


    @PostMapping ("/get_surveys")
  public List<CreateSurvey> getSurvey(@RequestBody User user) {
      return createSurveyService.findSurveyByEmailId(user.getEmail());
    }


}
