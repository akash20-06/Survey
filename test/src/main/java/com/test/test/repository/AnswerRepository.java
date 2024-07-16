package com.test.test.repository;

import com.test.test.entity.Answer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface AnswerRepository extends MongoRepository<Answer, String> {
   Answer findBySurveyname(String surveyname);

}
