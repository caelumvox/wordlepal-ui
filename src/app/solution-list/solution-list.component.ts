import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { WordlepalApiService } from '../wordlepal-api.service';

@Component({
  selector: 'app-solution-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, 
    MatCardModule, 
    MatFormFieldModule, 
    MatGridListModule, 
    MatInputModule, 
    MatSelectModule,
    MatTableModule
  ],
  templateUrl: './solution-list.component.html',
  styleUrl: './solution-list.component.css'
})
export class SolutionListComponent {
  sortOption: string = 'atoz';
  words: string[];
  wordsByDate: any;
  displayedColumns: string[] = ['date', 'words'];

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
      this.wordsByDate.sort((a: any, b: any) => b.date - a.date);
    });
  }
}
