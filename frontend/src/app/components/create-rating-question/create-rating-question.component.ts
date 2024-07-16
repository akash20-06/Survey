import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionTypeService } from '../question-type.service';
import { SurveyService } from '../Survey.Service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OwnerService } from '../../owner.service';

@Component({
  selector: 'app-create-rating-question',
  templateUrl: './create-rating-question.component.html',
  styleUrls: ['./create-rating-question.component.css']
})
export class CreateRatingQuestionComponent {
  question = {
    questionText: ''
  };
  ratingScale: number |undefined;  // Default rating scale
  errorMessage: string = '';
  ratingScales=[1,2,3,4,5];
  constructor(
    private http: HttpClient,
    private router: Router,
    private questionTypeService: QuestionTypeService,
    private surveyService: SurveyService,
    private ownerService: OwnerService
  ) {}

  onSaveAndContinue() {
    this.questionTypeService.setQuestionType('rating');
    this.questionTypeService.setQuestionLabel(this.question.questionText);
    if(this.ratingScale!=undefined)
     this.questionTypeService.setResponsesRating(this.ratingScale.toString());

    const question = {
      type: this.questionTypeService.getQuestionType(),
      label: this.questionTypeService.getQuestionLabel(),
      options: [this.questionTypeService.getResponsesRating()]
    };

    this.surveyService.addQuestion(question);
    this.router.navigate(['/question-type-selection']);
  }

  onFinish() {
    this.onSaveAndContinue();  // Save the current question before finishing

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
    this.ratingScale=undefined;  // Reset to default rating scale
  }
}
