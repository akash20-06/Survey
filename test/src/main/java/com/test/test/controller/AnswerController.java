package com.test.test.controller;

import com.test.test.service.AnswerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.test.test.entity.Answer;
import com.test.test.entity.CreateSurvey;
import com.test.test.repository.AnswerRepository;
import com.test.test.repository.CreateSurveyRepository;

import java.util.Optional;
import java.util.List;

@RestController
@RequestMapping("/api/answers")
public class AnswerController {
  @Autowired
    private  AnswerRepository answerRepository;



 @Autowired
 private AnswerService answerService;
    @PostMapping
    public Answer createAnswer(@RequestBody Answer answer) {
      return  answerService.addAnswer(answer);
    }



   






}
