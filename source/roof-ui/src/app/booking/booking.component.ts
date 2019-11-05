import { Component, OnInit } from '@angular/core';
import {PropertyService} from '../properties/property.service';
import { from, Subscription } from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bookForm:FormGroup;
  id:String;
  propertySubscription:Subscription;
  propertyData:any;
  ownerId:String;
  isNotAvail:boolean;
  isCheck:boolean=false;
  isAvail:boolean;
  constructor(private propertyService:PropertyService ,private route: ActivatedRoute) {
    this.bookForm=new FormGroup({

      fromDate:new FormControl('',[Validators.required]),
      toDate:new FormControl('',[Validators.required]),
      usrId :new FormControl(sessionStorage.getItem('username')),
      // ownerId:new FormControl(''),
      
   })
  }


  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("_id")
    console.log(this.id);
    
    this.propertySubscription = this.propertyService.getPropertiesById(this.id)
      .subscribe((res: any) => {
        console.log(res);
        this.propertyData = res;
        console.log(this.propertyData.usrId);
        console.log(this.propertyData.lift);
        if(this.propertyData.reviews[0]!=null)
         this.isCheck=true;
        else
        this.isCheck=false;
        console.log(this.isCheck)
      })

  }



  async bookProperty(){
    this.ownerId=this.propertyData.usrId;
    console.log("Ownerid "+this.ownerId);
    

    let res=await this.propertyService.checkProperty(this.bookForm.value.usrId,this.bookForm.value.fromDate,this.bookForm.value.toDate,this.ownerId,this.id);
    console.log(res.status);
    if(res.status==="Success")
    {
      this.isAvail=true;
      this.isNotAvail=false
      
      let res = await this.propertyService.bookProperty(this.bookForm.value.usrId,this.bookForm.value.fromDate,this.bookForm.value.toDate,this.ownerId,this.id,this.propertyData.name,this.propertyData.imageFolder);
      console.log(res.status);
    }
    else{
    this.isAvail=false;
    this.isNotAvail=true;
  
    }
    
  }



}
