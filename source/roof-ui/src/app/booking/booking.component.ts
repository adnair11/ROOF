import { Component, OnInit } from '@angular/core';
import {PropertyService} from '../properties/property.service';
import { from, Subscription } from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  providers: [DatePipe]
})
export class BookingComponent implements OnInit {
  curDate = new Date();
  curCheck:boolean=false;
  bookForm:FormGroup;
  dateCheck:boolean=false;
  id:String;
  propertySubscription:Subscription;
  propertyData:any;
  ownerId:String;
  isNotAvail:boolean;
  isCheck:boolean=false;
  isAvail:boolean;
  user:String;
  numOfImages:any;
  noOfSlide:any;
  constructor(private propertyService:PropertyService ,private route: ActivatedRoute, private datePipe:DatePipe) {
    this.curDate = this.datePipe.transform(this.curDate, 'yyyy-MM-dd');
    this.bookForm=new FormGroup({

      fromDate:new FormControl('',[Validators.required]),
      toDate:new FormControl('',[Validators.required]),
      usrId :new FormControl(sessionStorage.getItem('username')),
      // ownerId:new FormControl(''),
      
   })
  }


  ngOnInit() {
    this.numOfImages=[];
    this.noOfSlide=[];
    this.id = this.route.snapshot.paramMap.get("_id")
    console.log(this.id);
    this.user=sessionStorage.getItem('username');
    
    this.propertySubscription = this.propertyService.getPropertiesById(this.id)
      .subscribe((res: any) => {
        console.log(res);
        this.propertyData = res;
        console.log(this.propertyData.usrId);
        console.log(this.propertyData.lift);
        for(let i=1;i<res.noOfImages;i++){
          this.numOfImages.push(i);
          console.log(this.numOfImages);
        }
        for(let i=0;i<res.noOfImages;i++){
          this.noOfSlide.push(i);
          console.log(this.noOfSlide);
        }
        if(this.propertyData.reviews[0]!=null)
         this.isCheck=true;
        else
        this.isCheck=false;
        console.log(this.isCheck)
      })

  }



  async bookProperty(){
    console.log(this.curDate);
    console.log(this.bookForm.value.fromDate);
    this.ownerId=this.propertyData.usrId;
    console.log("Ownerid "+this.ownerId);
    if(this.bookForm.value.fromDate<this.curDate)
    { this.curCheck=true; 
    console.log("true"); }
else{
  this.curCheck=false;
    if(this.bookForm.value.toDate<this.bookForm.value.fromDate){
     this.dateCheck=true;
    }
    else{
      this.dateCheck=false;
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
}



}
