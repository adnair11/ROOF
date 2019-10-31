import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/service/authentication.service';
@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {

  
loginForm:  FormGroup; 
  invalidLogin:boolean;

  constructor(private router: Router,
              private loginservice: AuthenticationService,private fb: FormBuilder ) { }

  ngOnInit() {
    this.invalidLogin= true;
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }
  checkLogin() {
    console.log(this.loginForm.value.username);
    if (    this.loginservice.authenticate(this.loginForm.value.username, this.loginForm.value.password)
    ) {
  
       this.router.navigate(['']);
     
     this.invalidLogin = false;
    } else if(this.invalidLogin) {
      alert('Invalid Credentials');
      
    }
  }

}

