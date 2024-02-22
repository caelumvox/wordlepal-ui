import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { Attempt } from '../models/attempt';

@Component({
  selector: 'app-solution-assist',
  standalone: true,
  imports: [
    MatCardModule,
    MatGridListModule
  ],
  templateUrl: './solution-assist.component.html',
  styleUrl: './solution-assist.component.css'
})
export class SolutionAssistComponent {
  attemptList: Attempt[] = [];

  constructor() {

  }

  updateColor() {
    console.log('Color updated');
  }
}
