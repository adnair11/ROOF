import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from 'rxjs';
import { PropertyService } from '../properties/property.service';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

  id :any;
  duplicatePropertyData : any;
  propertyData: any;
  isSaved:boolean;
  isTrue:boolean;
  propertySubscription : Subscription;
  constructor(private propertyService: PropertyService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("_id")
    this.propertySubscription = this.propertyService.getPropertiesById(this.id)
      .subscribe((res: any) => {
        console.log(res);
        this.propertyData = res;
        this.isSaved =true;
      })
  }
  onEditHandler(){
    this.duplicatePropertyData=JSON.parse(JSON.stringify(this.propertyData));
  }

  async onUpdateHandler(formData){
    console.log(formData);
    console.log(formData.value);
    let res = await this.propertyService.updateProperty(this.duplicatePropertyData);

  }
  saveProperty(){
    this.isTrue =true;
  }

  async onDeleteHandler(){
    console.log(this.id);
    this.id = this.route.snapshot.paramMap.get("_id")
    this.propertyService.deletePropertiesById(this.id);
  }
  ngOnDestroy(){
    console.log("Inside destroy");
    this.propertySubscription.unsubscribe();
  }

}
