import { Component } from '@angular/core';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {
  email: string = '';

  constructor(private emailService: EmailService) {}

  onLogin() {
    this.emailService.sendEmail(this.email).subscribe(response => {
      console.log('Response:', response.message);
    });
  }
}
