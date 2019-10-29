import { Component, OnInit } from '@angular/core';
import {PropertyService} from '../property.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-property-booked',
  templateUrl: './property-booked.component.html',
  styleUrls: ['./property-booked.component.css']
})
export class PropertyBookedComponent implements OnInit {

  bookingSubscription:Subscription;
  bookingList:any[];
  User:string =sessionStorage.getItem('username');
  constructor(private propertyService:PropertyService) { }

  ngOnInit() {

    this.bookingSubscription= this.propertyService.getBookingsByOwnerId(this.User)
        .subscribe( (res : any[]) =>{
        console.log(res);
        this.bookingList =res;
       
    });

  }

}
