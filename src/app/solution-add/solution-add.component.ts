import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    MatButtonModule,
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
export class SolutionAddComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{
  date: moment.Moment;
  words: string = '';

  constructor(private wordlepalApiService: WordlepalApiService,
    private _snackBar: MatSnackBar) {
    this.date = moment();
  }

  ngOnInit() {
    console.log("OnInit")
  }

  ngOnChanges() {
    console.log("OnChanges")
  }

  ngDoCheck() {
    console.log("DoCheck")
  }

  ngAfterContentInit() {
    console.log("AfterContentInit")
  }

  ngAfterContentChecked() {
    console.log("AfterContentChecked")
  }

  ngAfterViewInit() {
    console.log("AfterViewInit")
  }

  ngAfterViewChecked() {
    console.log("AfterViewChecked")
  }

  ngOnDestroy() {
    console.log("OnDestroy")
  }

  validateWords(wordList: string[]) {
    for (let word of wordList) {
      if (!word.match(/^[A-Z]{5}$/)) {
        console.log(`Invalid word: ${word}`);
        this._snackBar.open(`Invalid word: ${word}`, 'Close', {
          duration: 2000,
        });
        throw new Error('Invalid word');
      }
    }
  }

  submitSolution() {
    if (!this.words) {
      console.log('No words entered. Not submitting.');
      this._snackBar.open('No words entered. Not submitting.', 'Close', {
        duration: 2000,
      });
      return;
    }

    const dateValue = this.date.year()*10000 + (this.date.month()+1)*100 + this.date.date();
    const wordList = this.words.split(',');
    wordList.forEach((word, index) => {
      wordList[index] = word.toUpperCase();
    });

    try {
      this.validateWords(wordList);
    } catch (e) {
      return;
    }
    const solution = {
      date: dateValue,
      words: wordList
    }
    console.log(`The solution is ${JSON.stringify(solution)}`);
    this.wordlepalApiService.addSolution(solution);
    this._snackBar.open(`Solution '${this.words}' for date '${this.date}' added`, 'Close', {
      duration: 5000,
    });

    // Reset the field.
    this.words = '';
  }
}
