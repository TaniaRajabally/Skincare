import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage = '';

  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {

  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['', Validators.required]
    });
  }

  /* tryFacebookLogin() {
    this.authService.doFacebookLogin()
    .then(res => {
      this.router.navigate(['/student']);
    });
  }*/

  tryGoogleLogin() {
    this.authService.doGoogleLogin()
    .then(res => {
      this.router.navigate(['/upload']);
    });
  }

  tryLogin(value) {
    if(this.authService.doLogin(value) && value.email=="tania@gmail.com")
    {
      this.router.navigate(['/upload']);
    }
  
  else{
  this.authService.doLogin(value)
  .then(res => {
    this.router.navigate(['/upload']);
  }, err => {
    console.log(err);
    this.errorMessage = err.message;
  });
}
  }

 }