import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import {provideMomentDateAdapter} from '@angular/material-moment-adapter';
import moment from 'moment';
import { WordlepalApiService } from '../wordlepal-api.service';

export const WORDLEPAL_DATE_FORMAT = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY-MM',
    dateA11yLabel: 'YYYY-MM-DD',
    monthYearA11yLabel: 'YYYY-MM',
  },
}

@Component({
  selector: 'app-solution-add',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule, 
    MatGridListModule,
    MatInputModule
  ],
  providers: [provideMomentDateAdapter(WORDLEPAL_DATE_FORMAT)],
  templateUrl: './solution-add.component.html',
  styleUrl: './solution-add.component.css'
})
export class SolutionAddComponent {
  date: moment.Moment;
  words: string = '';

  constructor(private wordlepalApiService: WordlepalApiService) {
    this.date = moment();
  }

  ngOnInit() {
  }

  submitSolution() {
    if (!this.words) {
      console.log('No words entered. Not submitting.');
      return;
    }
    const dateValue = this.date.year()*10000 + (this.date.month()+1)*100 + this.date.date();
    const wordList = this.words.split(',');
    const solution = {
      date: dateValue,
      words: wordList
    }
    console.log(`The solution is ${JSON.stringify(solution)}`);
    this.wordlepalApiService.addSolution(solution);

  }
}
