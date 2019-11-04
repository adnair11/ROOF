import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PropertyService } from '../properties/property.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  userData:any;
  forgotForm:FormGroup;
  name:String;
  userSubscription:Subscription;
  show:boolean = false;
  passwordForm:FormGroup;
  constructor(private propertyService:PropertyService ,private route: ActivatedRoute) {

    
   this.forgotForm=new FormGroup({
     answer:new FormControl('',[Validators.required]),
   });

   this.passwordForm=new FormGroup({
    password:new FormControl('',[Validators.required]),
  });
  }
  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get("name")
    console.log(this.name);
    // this.userData = this.propertyService.getSecurity(this.name);
    // console.log(this.userData.securityqn);


    this.userSubscription = this.propertyService.getSecurity(this.name)
      .subscribe((res: any) => {
        console.log(res);
        this.userData = res;
        console.log(this.userData.securityqn);
        
        
        
      })
  }

  
   forgotUser(){
     console.log("forgot user");
     console.log(this.userData.answer);
    if(this.forgotForm.value.answer === this.userData.answer)
      {console.log("answer verified");
       this.show = true;

   }
  }

  async passwordUser(){
    
    let res = await this.propertyService.editPassword(this.name,this.passwordForm.value.password);

  }
}
