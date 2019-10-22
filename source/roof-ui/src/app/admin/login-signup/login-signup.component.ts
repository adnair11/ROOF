import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor(private _router: Router, private fb: FormBuilder) {  }

username: string;
password: string;
LoginForm: FormGroup;


  ngOnInit() {


    this.LoginForm = this.fb.group({
      username: ['', [ Validators.required]],
      password: ['', Validators.required],
  });

}
login(){

}
    }

