import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionTypeService {
  private type: string = '';
  private label: string = '';
  private responses: string[] = [];

  setQuestionType(type: string): void {
    this.type = type;
  }

  getQuestionType(): string {
    return this.type;
  }

  setQuestionLabel(label: string): void {
    this.label = label;
  }

  getQuestionLabel(): string {
    return this.label;
  }

  setResponses(responses: string[]): void {
    this.responses = responses;
  }

  setResponsesRating(response: string): void {
    this.responses = [response];  // Ensure only one rating response is stored
  }

  getResponses(): string[] {
    return this.responses;
  }

  getResponsesRating(): string {
    return this.responses.length > 0 ? this.responses[0] : '';
  }

  addResponse(response: string): void {
    this.responses.push(response);
  }
}
