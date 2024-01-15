import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-solution-menu',
  standalone: true,
  imports: [MatCardModule, MatGridListModule],
  templateUrl: './solution-menu.component.html',
  styleUrl: './solution-menu.component.css'
})
export class SolutionMenuComponent {

}
