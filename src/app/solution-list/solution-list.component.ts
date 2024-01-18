import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { WordlepalApiService } from '../wordlepal-api.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-solution-list',
  standalone: true,
  imports: [MatCardModule, MatGridListModule, FormsModule, MatInputModule, MatSelectModule, MatFormFieldModule, CommonModule],
  templateUrl: './solution-list.component.html',
  styleUrl: './solution-list.component.css'
})
export class SolutionListComponent {
  sortOption: string = 'atoz';
  words: string[];
  wordsByDate: any;

  constructor(
    private wordlepalApiService: WordlepalApiService) {
    this.words = [];
  }

  ngOnInit() {
    this.wordlepalApiService.getAllSolutions().subscribe((data) => {
      this.wordsByDate = data.solutions;
      for (var i = 0; i < data.solutions.length; i++) {
        for (var j = 0; j < data.solutions[i].words.length; j++) {
          this.words.push(data.solutions[i].words[j]);
        }
      }
      this.words.sort();
    });
  }

  setSortSelection() {

  }

  getObservable(value: string) {
    return of(value);
  }
}
