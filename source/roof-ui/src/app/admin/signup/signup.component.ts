import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  profileForm: FormGroup;
  Id: number;
  // data: IProfile;
  // tslint:disable-next-line:variable-name
  constructor(private fb: FormBuilder  , private _router: Router) {  }
  ngOnInit(): void {
this.Id = this.getRandomArbitrary(10, 100);
this.profileForm = this.fb.group({
      username: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      contact: ['', Validators.required],
      password: ['', Validators.required],
      isAbsentee: ['false'],
      isActivated: ['false'],
      isTardy: ['false'],
      isPunctual: ['true'],
      isActive: ['false'],
      employeeId: [this.Id]
      });
  }
 getRandomArbitrary = (min, max) => {
    return Math.ceil(Math.random() * (max - min) + min);
  }
  get function()  {
return this.profileForm.controls;
  }

  saveProfile() {



  }


}
