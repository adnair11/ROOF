  import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PropertyService } from '../properties/property.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  isSaved :boolean;
  // Step 1 : create form group
  propertyForm: FormGroup
  constructor( private propertyService:PropertyService,private router:Router) { 
    this.propertyForm = new FormGroup({
      // Step 2 : Create form control
      name : new FormControl('Piyush',Validators.required),
      bhk : new FormControl('21',Validators.required),
      city : new FormControl('fsd',Validators.required),
      usrId :new FormControl(sessionStorage.getItem('username'))
    });
   }
   async onAddPropertyHandler(){
    console.log(this.propertyForm +"hi");
     console.log(this.propertyForm.value + "helooooooooooooo");
     let res : any = await this.propertyService.createProperty(this.propertyForm.value);
     console.log(res.status+ "status");
     if(res && res.status==="Success"){
      this.isSaved = true;
      console.log("IN Prop");
      this.router.navigate(['properties']);
    }
   }



  ngOnInit() {
  }

}
