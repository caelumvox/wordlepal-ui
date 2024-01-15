import { Routes } from '@angular/router';
import { SolutionListComponent } from './solution-list/solution-list.component';
import { SolutionAddComponent } from './solution-add/solution-add.component';
import { SolutionAssistComponent } from './solution-assist/solution-assist.component';
import { SolutionMenuComponent } from './solution-menu/solution-menu.component';

export const routes: Routes = [
  { path: '', redirectTo: 'solution-menu', pathMatch: 'full' },
  { path: 'solution-menu', component: SolutionMenuComponent },
  { path: 'list-solutions', component: SolutionListComponent },
  { path: 'submit-solution', component: SolutionAddComponent },
  { path: 'assist-solution', component: SolutionAssistComponent }
];
