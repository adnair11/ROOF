import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PropertyService } from 'src/app/properties/property.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  userData:any;
  success:boolean;
  duplicateUserData:any;
  userSubscription:Subscription;
  bookingList : any[];
  bookingSubscription : Subscription;
  User:string =sessionStorage.getItem('username');
  propId:String;
  constructor(private propertyService:PropertyService,private router:Router) { }


  ngOnInit() {
    this.userSubscription = this.propertyService.getUserById(this.User)
      .subscribe((res: any) => {
        console.log(res);
        this.userData = res;
        console.log(this.userData.name);

    this.bookingSubscription= this.propertyService.getBookingsByUsrId(this.User)
        .subscribe( (res : any[]) =>{
        console.log(res);
        this.bookingList =res;
       
    });

      })

      
  }

  onEditHandler(){
    this.duplicateUserData=JSON.parse(JSON.stringify(this.userData));
  }

  async onUpdateHandler(formData){
    console.log(formData);
    console.log(formData.value);
    let res:any = await this.propertyService.updateUser(this.User,this.duplicateUserData);
      if(res.status==="Success")
      {this.router.navigate['myprofile'];
      this.success=false;
    }
      else
     this.success=true;
  }

  
}





 

  