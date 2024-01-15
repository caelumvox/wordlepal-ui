import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SolutionEnvelope } from './models/solution-envelope';

@Injectable({
  providedIn: 'root'
})
export class WordlepalApiService {
  url: string;

  constructor(private httpClient: HttpClient) { 
    this.url = "http://localhost:3000";
  }

  getAllSolutions(): Observable<SolutionEnvelope> {
    return this.httpClient.get<SolutionEnvelope>(this.url + "/solution", {});
  }
}
