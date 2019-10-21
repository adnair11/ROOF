import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  
  searchForm: FormGroup;
  constructor() { 
    this.searchForm = new FormGroup({
      city : new FormControl(Validators.required),
      bhk : new FormControl(Validators.required)
    });
  }
  async onSearchPropertyHandler(){
    console.log(this.searchForm.value.city);
    console.log(this.searchForm.value.bhk);
  }
   
   
   

  ngOnInit() {
    
  }

}
