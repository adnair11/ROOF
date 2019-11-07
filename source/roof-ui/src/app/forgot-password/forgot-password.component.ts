import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../properties/property.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  emailForm:FormGroup;
  userData:any;
  forgotForm:FormGroup;
  constructor(private propertyService:PropertyService ,private route: ActivatedRoute) {

    this.emailForm=new FormGroup({

      name:new FormControl('',[Validators.required]),
   });
   this.forgotForm=new FormGroup({
     answer:new FormControl('',[Validators.required]),
   });
  }
  ngOnInit() {
    
  }

  async getSecurity(){
     this.userData = await this.propertyService.getSecurity(this.emailForm.value.name);
 console.log(this.userData.securityqn);

  }

  async forgotUser(){
    if(this.forgotForm.value.answer === this.userData.answer)
      console.log("answer verified");
  }
}
