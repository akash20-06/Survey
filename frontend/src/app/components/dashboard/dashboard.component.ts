import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { DashboardService } from '../../service/dashboard.service';
import { OwnerService } from '../../owner.service';
import { CreateSurvey } from '../../service/dashboard.service';
import { DashQuestionService } from '../../service/dash_Question.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: CreateSurvey[] = [];
  email: string | undefined ="";
  

  errorMessage: string | undefined;
   
  constructor(
    private http: HttpClient,
    private router: Router,
    private surveyService: DashboardService,
    private ownerService: OwnerService,
    private dashQuestionService: DashQuestionService
  ) { }

  ngOnInit(): void {
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    this.email=this.ownerService.getEmail();
   
    this.http.post<CreateSurvey[]>('http://localhost:9090/api/users/get_surveys', this.ownerService, { headers })
      .subscribe(
        response => {
          this.data = response; 
          this.dashQuestionService.setSurveys(this.data);
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
  viewSurvey(surveyName: string): void {
    this.router.navigate(['/survey', surveyName]);
  }
  logout(): void {
    // Perform logout actions, such as clearing session/storage, redirecting to login page
    // Example: Clear email from owner service and navigate to login page
    this.ownerService.clearEmail(); // Implement this method in OwnerService if needed
    this.router.navigate(['/login']);
  }
}
