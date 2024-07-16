import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionTypeService } from '../question-type.service';
import { SurveyService } from '../Survey.Service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OwnerService } from '../../owner.service';

@Component({
  selector: 'app-create-rating-question',
  templateUrl: './create-rating-question.component.html',
  styleUrl: './create-rating-question.component.css'
})
export class CreateRatingQuestionComponent {
  question = {
    questionText: ''
  };
  newResponse: string = '';
  responses: string[] = [];

  ratingScales = [5, 6, 7, 8, 9, 10]; 

  errorMessage: string = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private questionTypeService: QuestionTypeService,
    private surveyService: SurveyService,
    private ownerService: OwnerService
  ) {}
  onSaveAndContinue() {
    this.questionTypeService.setQuestionLabel(this.question.questionText);
    this.questionTypeService.setResponses(this.responses);
   const question={questionType:this.questionTypeService.getQuestionType,questionLabel:this.questionTypeService.getQuestionLabel,options:this.questionTypeService.getResponses}
    this.surveyService.addQuestion(question);
    this.router.navigate(['/question-type-selection']);
  }
  onFinish() {
    this.questionTypeService.setQuestionLabel(this.question.questionText);
    this.questionTypeService.setResponses(this.responses);
   const question={questionType:this.questionTypeService.getQuestionType,questionLabel:this.questionTypeService.getQuestionLabel,options:this.questionTypeService.getResponses}
    this.surveyService.addQuestion(question);
  
    const survey = {
      email: this.ownerService.getEmail(),  
      surveyName: this.surveyService.getSurveyName(),  
      surveyDescription: this.surveyService.getSurveyDesc(),  
      uptime: this.surveyService.getUptime(),  
      questions: this.surveyService.getQuestions()  
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.post('http://localhost:9090/api/users/create_user', survey, { headers, responseType: 'text' })
      .subscribe(
        response => {
          alert(response); 
          this.router.navigate(['/dashboard']);
        },
        error => {
          if (error.status === 401) {
            this.errorMessage = 'Invalid email or password';
          } else {
            this.errorMessage = 'An error occurred: ' + error.message;
          }
        }
      );
  }

  onReset() {
    this.question = {
      questionText: ''
    };
    this.newResponse = '';
    this.responses = [];
  }
}