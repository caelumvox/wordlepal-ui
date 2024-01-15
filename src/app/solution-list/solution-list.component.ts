import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { WordlepalApiService } from '../wordlepal-api.service';

@Component({
  selector: 'app-solution-list',
  standalone: true,
  imports: [MatCardModule, MatGridListModule],
  templateUrl: './solution-list.component.html',
  styleUrl: './solution-list.component.css'
})
export class SolutionListComponent {
  words: string[];
  constructor(private wordlepalApiService: WordlepalApiService) {
    this.words = [];
  }

  ngOnInit() {
    this.wordlepalApiService.getAllSolutions().subscribe((data) => {
      for (var i = 0; i < data.solutions.length; i++) {
        for (var j = 0; j < data.solutions[i].words.length; j++) {
          this.words.push(data.solutions[i].words[j]);
        }
      }
      this.words.sort();
    });
  }
}
