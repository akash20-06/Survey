package com.test.test.repository;
import com.test.test.entity.Answer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.test.test.entity.User;

import java.util.List;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
        User findByEmail(String surveyId);
}