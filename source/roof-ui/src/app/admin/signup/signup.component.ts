import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators, FormControl , FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  profileData: any;
  Id: number;
  profileForm: any;
_value: number;
  // data: IProfile;
  // tslint:disable-next-line:variable-name
  constructor(private fb: FormBuilder  , private _router: Router, private http: HttpClient) {  }
  ngOnInit(): void {
// this.Id = this.getRandomArbitrary(10, 100);
this.profileForm = this.fb.group({
      name: ['', Validators.required ],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      contact: ['', Validators.required],
      password: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      pincode: ['', Validators.required],
      // isAbsentee: ['false'],
      // isActivated: ['false'],
      // isTardy: ['false'],
      // isPunctual: ['true'],
      // isActive: ['false'],
      // employeeId: [this.Id]
      });
  }
//  getRandomArbitrary = (min, max) => {
//     return Math.ceil(Math.random() * (max - min) + min);
//   }
set value(newValue: number)  {
  this._value = newValue;

}

  get function()  {
return this.profileForm.controls;
  }
   checkNum() {
    console.log(this._value);
    if (this._value > 999999 || this._value < 10000) {

return false;
}

}


  saveProfile() {

        console.log(this.profileForm.value.firstName);
        this.profileData = this.profileForm.value;


        this.http.post('http://localhost:8060/user/register', this.profileData)
          .toPromise()
          .then((res) => {
            console.log(res);
            this._router.navigate(['/loginsignup']);
            return res;
          })
          .catch((err) => {
            return err;
          });

    }
}
