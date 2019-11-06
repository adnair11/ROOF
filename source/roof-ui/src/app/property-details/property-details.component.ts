import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from 'rxjs';
import { PropertyService } from '../properties/property.service';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

  delete:boolean=false;
  isCheck:boolean = false;
  id :any;
  duplicatePropertyData : any;
  propertyData: any;
  isSaved:boolean;
  isTrue:boolean;
  propertySubscription : Subscription;
  constructor(private propertyService: PropertyService,private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("_id")
    console.log(this.id);
    this.propertySubscription = this.propertyService.getPropertiesById(this.id)
      .subscribe((res: any) => {
        console.log(res);
        this.propertyData = res;
        this.isSaved =true;
      })

      if(this.propertyData.reviews[0]!=null)
         this.isCheck=true;
        else
        this.isCheck=false;
        console.log(this.isCheck)
      
  }
  onEditHandler(){
    this.duplicatePropertyData=JSON.parse(JSON.stringify(this.propertyData));
    console.log(this.duplicatePropertyData);
  }

  async onUpdateHandler(formData){
    console.log(formData);
    console.log(formData.value);
    let res = await this.propertyService.updateProperty(JSON.stringify(this.duplicatePropertyData));

  }
  saveProperty(){
    this.isTrue =true;
  }

  async onDeleteHandler(){
    console.log(this.id);
    this.id = this.route.snapshot.paramMap.get("_id")
    let res:any = await this.propertyService.deletePropertiesById(this.id);
    console.log(res.status);
    if(res.status === "Success")
    {this.router.navigate(['properties']);
   this.delete=false;}
    else
    this.delete=true;
  }
  ngOnDestroy(){
    console.log("Inside destroy");
    this.propertySubscription.unsubscribe();
  }

}
