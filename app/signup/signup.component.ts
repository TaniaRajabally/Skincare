import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  SignupForm: FormGroup;
  LoginForm: FormGroup;
  errorMessage = '';
  successMessage = '';


  constructor( public authService: AuthService,
               public router:Router,
               private fb: FormBuilder)
  {
    this.createSignupForm();
    this.createLoginForm();
  }

  model: any = {};

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }

  ngOnInit() {
  }

  createSignupForm() {
    this.SignupForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['', Validators.required]
    });
  }
  createLoginForm() {
    this.LoginForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['', Validators.required]
    });
  }

  trySignup(value) {
    this.authService.doSignup(value)
        .then(res => {
          console.log(res);
          this.errorMessage = '';
          this.successMessage = 'Your account has been created';
          this.router.navigate(['/register']);
        }, err => {
          console.log(err);
          this.errorMessage = err.message;
          this.successMessage = '';
        });
  }
  tryLogin(value) {
    this.authService.doLogin(value)
        .then(res => {
          this.router.navigate(['/register']);
        }, err => {
          console.log(err);
          this.errorMessage = err.message;
        });
  }



  tryGoogleLogin() {
    this.authService.doGoogleLogin()
        .then(res => {
           this.router.navigate(['/register']);
            }, err => console.log(err)
        );
  }


}
