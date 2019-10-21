import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PropertyService } from './property.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit,OnDestroy {
  propertyList : any[];
  propertySubscription : Subscription;
  
  constructor(private propertyService:PropertyService) {

   }

  ngOnInit() {
    this.propertySubscription= this.propertyService.getProperties()
    .subscribe( (res : any[]) =>{
      console.log(res);
      this.propertyList =res;
      
    });
  }
  ngOnDestroy(){
    console.log("Inside destroy");
    this.propertySubscription.unsubscribe();
  }
}
