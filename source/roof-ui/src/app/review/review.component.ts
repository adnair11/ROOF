import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../properties/property.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  reviewForm:FormGroup;
  id:String;
  isSaved:boolean = false;
  constructor(private route: ActivatedRoute,private propertyService: PropertyService) {
    this.id = this.route.snapshot.paramMap.get("_id")
    this.reviewForm=new FormGroup({
    text:new FormControl('',Validators.required),
    usrId :new FormControl(sessionStorage.getItem('username')),
    propertyId: new FormControl(this.id)

}) }


  ngOnInit() {
    
  }

  async onReviewHandler()
  {
    console.log("piyush is here");
    this.id = this.route.snapshot.paramMap.get("_id")
    
    let res  = await this.propertyService.reviewProperty(this.reviewForm.value);
     console.log( res);
     

}


  printmessage(){
    this.isSaved=true;
  }

}
