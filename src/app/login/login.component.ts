import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { WordlepalApiService } from '../services/wordlepal-api.service';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private wordlepalApiService: WordlepalApiService,
    private sessionService: SessionService,
    private router: Router) {
  }

  login() {
    console.log(`Logging in user [${this.username}]`);

    const deviceUuid = this.sessionService.getDeviceUuid();

    this.wordlepalApiService.login(this.username, this.password, deviceUuid)
      .subscribe(
        (response: any) => {
          console.log(`Login response: ${response}`);
          this.sessionService.setSession(response.token);
          this.router.navigate(['/']);
        },
        (error: any) => {
          console.log(`Login error: ${error}`);
        }
      );
  }
}
