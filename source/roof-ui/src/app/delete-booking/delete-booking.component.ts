import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../properties/property.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-booking',
  templateUrl: './delete-booking.component.html',
  styleUrls: ['./delete-booking.component.css']
})
export class DeleteBookingComponent implements OnInit {
  id:String;
  constructor(private propertyService:PropertyService,private route:ActivatedRoute,private router: Router) { }

  ngOnInit() {
    
    this.id = this.route.snapshot.paramMap.get("_id");
    console.log(this.id);
  }

  deleteBooking(){
    this.propertyService.deleteBooking(this.id);
    this.router.navigate(['myprofile']);
  }
  }
  

