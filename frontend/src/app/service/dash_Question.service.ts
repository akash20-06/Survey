import { Injectable } from '@angular/core';
import { CreateSurvey } from './dashboard.service';

@Injectable({
  providedIn: 'root'
})
export class DashQuestionService {
  private surveys: CreateSurvey[] = [];

  setSurveys(surveys: CreateSurvey[]): void {
    this.surveys = surveys;
  }

  getSurveys(): CreateSurvey[] {
    return this.surveys;
  }
}
