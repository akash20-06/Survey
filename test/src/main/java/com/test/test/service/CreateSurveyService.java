package com.test.test.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.test.test.repository.CreateSurveyRepository;
import com.test.test.entity.CreateSurvey;
import java.util.*;

@Service
public class CreateSurveyService {

    @Autowired
    private CreateSurveyRepository repository;
    public  List<CreateSurvey> findAllSurvey() {
        return repository.findAll();
    }
    public CreateSurvey addsurvey(CreateSurvey user) {

        return repository.save(user);
    }
     public  List<CreateSurvey> findSurveyByEmailId(String email) {
        return repository.findByEmail(email);
     }

    }