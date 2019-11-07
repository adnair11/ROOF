import { Component, OnInit } from '@angular/core';
import { config } from 'rxjs';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { PropertyService } from '../properties/property.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rating-basic',
  templateUrl: './rating-basic.component.html',
  styleUrls: ['./rating-basic.component.css']
})
export class RatingBasicComponent implements OnInit {
  currentRate = 0;
  propertyId:String;
  error:boolean=false;
  constructor(config: NgbRatingConfig,private propertyService:PropertyService,private route:ActivatedRoute,private router:Router) {
    config.max=5;
    this.propertyId = this.route.snapshot.paramMap.get("_id")
   }

  ngOnInit() {
    console.log(this.currentRate);
    
    
  }

  async onRating(){
    console.log(this.currentRate);
    console.log("hELLO");
    let res:any = await this.propertyService.addRating(this.currentRate,this.propertyId);
    if(res.status === "Success")
    {
      this.router.navigate(['myprofile']);
      this.error=false;
    }
    else
    this.error= true;
  }
}
