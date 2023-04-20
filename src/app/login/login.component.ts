import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../services/email.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {
  loginForm!: FormGroup;
  isLoading: boolean = false;
  email: string = '';

  constructor(public auth: AuthService, private emailService: EmailService, private fb: FormBuilder) {
    this.createForm();
  }

  private createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  login() {
    if (this.loginForm.invalid) {
      return;
    }

    this.isLoading = true;
    this.auth.loginWithRedirect();
    this.isLoading = false;

  }

  logout() {
    this.auth.logout(
      {
        logoutParams:{
          returnTo: window.location.origin,
        } 
      });
  }

  // getProfile() {
  //   this.auth.user$.subscribe((user) => {
  //     if (user) {
  //       this.apiService.getUserProfile(user.sub).subscribe((response) => {
  //         console.log(response);
  //       });
  //     }
  //   });
  // }

  // onLogin() {
  //   this.emailService.sendEmail(this.email).subscribe(response => {
  //     console.log('Response:', response.message);
  //   });
  // }
}
