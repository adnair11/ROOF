import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor(private _router: Router, private fb: FormBuilder ,private http: HttpClient) {  }

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
  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.LoginForm.value.name + ':' + this.LoginForm.value.password) });
  this.http.get("http://localhost:8060/user/login",{headers})
          .toPromise()
          .then((res) => {
            console.log(res);
            return res;
          })
          .catch((err) => {
            return err;
          })
}
    }

