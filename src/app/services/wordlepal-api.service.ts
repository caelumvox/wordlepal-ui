import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SolutionEnvelope } from '../models/solution-envelope';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class WordlepalApiService {
  url: string;

  constructor(
    private httpClient: HttpClient,
    private sessionService: SessionService) { 
    this.url = "http://localhost:3001";
  }

  getAllSolutions(): Observable<SolutionEnvelope> {
    return this.httpClient.get<SolutionEnvelope>(this.url + "/solution", {});
  }

  addSolution(solution: any) {
    this.httpClient.post(this.url + "/solution", solution, 
      {
        headers: {
          'Authorization': `Bearer ${this.sessionService.getSession().token}`
        }
      }    
    ).subscribe(
      (response) => console.log(`Response: ${response}`),
      (error) => console.log(`Error occurred: ${error}`)
    );
  }

  login(username: string, password: string, deviceUuid: string) {
    console.log(`Attempting to log in user [${username}]`);
    return this.httpClient.post(this.url + "/login", 
      {
        "username": username, 
        "password": password,
        "device": deviceUuid
      }, {});
  }
}
