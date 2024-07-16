package com.test.test.service;

import com.test.test.entity.Answer;
import com.test.test.repository.AnswerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.test.test.repository.CreateSurveyRepository;
import com.test.test.entity.CreateSurvey;
import java.util.*;

@Service
public class AnswerService {
    @Autowired
    private CreateSurveyRepository createSurveyRepository;
    @Autowired
    private AnswerRepository repository;
    public  List<Answer> findAllAnswer() {
        return repository.findAll();
    }
    public Answer addAnswer(Answer user) {

        return repository.save(user);
    }



}