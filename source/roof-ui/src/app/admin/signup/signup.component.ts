import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  profileData:any;
  profileForm: any;
  Id: number;
  // data: IProfile;
  // tslint:disable-next-line:variable-name
  constructor(private fb: FormBuilder  , private _router: Router,private http: HttpClient) {  }
  ngOnInit(): void {
// this.Id = this.getRandomArbitrary(10, 100);
this.profileForm = this.fb.group({
      name: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email:['', Validators.required],
      contact: ['', Validators.required],
      password: ['', Validators.required],
      city:['', Validators.required],
      state:['', Validators.required],
      country:['', Validators.required],
      pincode:['', Validators.required],
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
  get function()  {
return this.profileForm.controls;
  }

  saveProfile() {
   
        console.log(this.profileForm.value.firstName);
        this.profileData = this.profileForm.value;
        
      
        this.http.post("http://localhost:8060/user/register",this.profileData)
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
