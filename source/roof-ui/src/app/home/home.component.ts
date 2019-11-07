import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PropertyService } from '../properties/property.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'app';
  selectedValue = '';
  items = [
    
    { value: '1', view: 'one' },
    { value: '2', view: 'two' },
    { value: '3', view: 'three' }
  ];
  searchForm: FormGroup;
  propertyData: any[];
  allPropertyData: any[];
  user:String;
  // tslint:disable-next-line: variable-name

  constructor(private propertyService: PropertyService,config: NgbRatingConfig) {
    config.max=5;
    config.readonly = true;
    
    this.searchForm = new FormGroup({
      city: new FormControl('0',Validators.required),
      bhk: new FormControl('0')
    });
  }
  async onSearchPropertyHandler() {
    console.log(this.searchForm.value.city);
    console.log(this.searchForm.value.bhk);
    
    this.propertyData = await this.propertyService.filterProperty(this.searchForm.value.city, this.searchForm.value.bhk);
    this.allPropertyData = this.propertyData;
    console.log('Inside filter');
    console.log(this.propertyData);

  }
  async getAllProperties() {
    this.allPropertyData = await this.propertyService.getAllProperties();
  }
  ngOnInit() {

    this.getAllProperties();
    this.user = sessionStorage.getItem('username');
    console.log(this.user);
  }


}
