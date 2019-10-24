import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PropertyService } from '../property.service';


@Component({
  selector: 'app-addproperty',
  templateUrl: './addproperty.component.html',
  styleUrls: ['./addproperty.component.css']
})
export class AddpropertyComponent implements OnInit {

  propertyForm:FormGroup;
  isSaved:boolean;
    constructor(private propertyserviceservice:PropertyService) {
      this.propertyForm=new FormGroup({
        name:new FormControl('',[Validators.required]),
        size:new FormControl('',[Validators.required]),
        type:new FormControl('',[Validators.required]),
        floor:new FormControl('',[Validators.required]),
        totalFloors:new FormControl('',[Validators.required]),
        bhk:new FormControl('',[Validators.required]),
        city:new FormControl('',[Validators.required]),
        locality:new FormControl('',[Validators.required]),
        rent:new FormControl('',[Validators.required]),
        prefTenant:new FormControl('',[Validators.required]),
        deposit:new FormControl('',[Validators.required]),
        available:new FormControl('',[Validators.required]),
        bathrooms:new FormControl('',[Validators.required]),
        balconies:new FormControl('',[Validators.required]),
        lift:new FormControl('',[Validators.required]),
        ac:new FormControl('',[Validators.required]),
       
        internet:new FormControl('',Validators.required)
      });
     }
    width :any;
    openNav(){
      this.width  = '250px' ;
    }
  
    closeNav(){
      this.width  = '0px' ;
    }
  
  

  ngOnInit() {
  }async addPropertyHandler(){

    console.log(this.propertyForm.value);
    let res=await this.propertyserviceservice.createProperty(this.propertyForm.value);
    console.log(res);
   
  }
}
