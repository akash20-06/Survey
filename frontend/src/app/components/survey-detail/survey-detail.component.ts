import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashQuestionService } from '../../service/dash_Question.service';
import { CreateSurvey } from '../../service/dashboard.service';

@Component({
  selector: 'app-survey-detail',
  templateUrl: './survey-detail.component.html',
  styleUrls: ['./survey-detail.component.css']
})
export class SurveyDetailComponent implements OnInit {
  survey: CreateSurvey | undefined;

  constructor(
    private route: ActivatedRoute,
    private dashQuestionService: DashQuestionService
  ) {}

  ngOnInit(): void {
    const surveyName = this.route.snapshot.paramMap.get('surveyName'); // Changed from 'id' to 'surveyName'
    if (surveyName) {
      this.survey = this.dashQuestionService.getSurveys().find(survey => survey.surveyName === surveyName);
    }
  }
}
