import { HttpService } from './../services/http-service';
import { UserSecurityService } from './../services/user.security.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
@Component({
  selector: 'app-login-security',
  templateUrl: './login.security.component.html',
  styleUrls: ['./login.security.component.css']
})
export class LoginSecurityComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  loginFormControl = new FormControl('', [
    Validators.required,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);

  matcher = new ErrorStateMatcher();



  constructor( public userService: UserSecurityService,
    private httpService: HttpService) { }

  ngOnInit() {
  }


  login() {
  }

  reloadPage() {
    window.location.reload();
  }
}
