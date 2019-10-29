import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PropertyService } from 'src/app/properties/property.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  userData:any;
  userSubscription:Subscription;
  bookingList : any[];
  bookingSubscription : Subscription;
  User:string =sessionStorage.getItem('username');
  constructor(private propertyService:PropertyService) { }


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

}





 

  