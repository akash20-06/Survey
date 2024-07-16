package com.test.test.repository;
import com.test.test.entity.CreateSurvey;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.test.test.entity.User;

import java.util.List;

@Repository
public interface CreateSurveyRepository extends MongoRepository<CreateSurvey, String> {
 List<CreateSurvey> findByEmail(String email);
}