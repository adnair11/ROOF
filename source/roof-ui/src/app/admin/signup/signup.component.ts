
import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators, FormControl , FormGroup} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  errors:any;
  confirm: boolean = false;
  profileData: any;
  Id: number;
  profileForm: FormGroup;
 _value: number;
 mob:boolean;
 mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";  
 pincodePattern = "([1-9])?[0-9]{6}$";
 isValidFormSubmitted = false;  
  constructor(private fb: FormBuilder  , private _router: Router, private http: HttpClient) {  }
  ngOnInit(): void {
this.profileForm = this.fb.group({
      name: new FormControl(null, [Validators.required, Validators.email]),
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      contact: ['', Validators.required],
      password: ['', Validators.required],
      password1:['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      pincode: ['', Validators.required],
      securityqn: ['', Validators.required],
      answer: ['', Validators.required],

            });
  }
set value(newValue: number)  {
  this._value = newValue;

}

  get function()  {
return this.profileForm.controls;
  }





  saveProfile() {

        console.log(this.profileForm.value.firstName);
        this.profileData = this.profileForm.value;
        if(this.profileForm.value.password != this.profileForm.value.password1)
          this.confirm=true;
     else
        {this.confirm = false;
          
           

        this.http.post('http://localhost:8060/user/register', this.profileData).subscribe(res => {
           console.log(res);
           setTimeout(() => {
             this._router.navigate(['/loginsignup'])
            }, 3000);
           return res;
        },error => {
          this.errors = error;
      });

          }
        }

}
