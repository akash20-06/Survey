package com.test.test.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("answers")
public class Answer {

    @Id
    private String id;
    private String surveyname;
    private String label;
    private String answerText;

    public Answer(String surveyname, String label, String answerText) {
        this.surveyname = surveyname;
        this.label = label;
        this.answerText = answerText;
    }

    public String getSurveyname() {
        return surveyname;
    }

    public void setSurveyname(String surveyname) {
        this.surveyname = surveyname;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getAnswerText() {
        return answerText;
    }

    public void setAnswerText(String answerText) {
        this.answerText = answerText;
    }

}
