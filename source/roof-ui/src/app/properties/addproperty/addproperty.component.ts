import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PropertyService } from '../property.service';


@Component({
  selector: 'app-addproperty',
  templateUrl: './addproperty.component.html',
  styleUrls: ['./addproperty.component.css']
})
export class AddpropertyComponent implements OnInit {

rental:any=true;
property:any=false;
locality:any=true;
amenities:any=true;
propertyForm:FormGroup;
isSaved:boolean;

  constructor(private propertyService:PropertyService) {

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

      deposit:new FormControl('',[Validators.required]),
      available:new FormControl('',[Validators.required]),
      prefTenant:new FormControl('',[Validators.required]),
      bathrooms:new FormControl('',[Validators.required]),
      balconies:new FormControl('',[Validators.required]),
      lift:new FormControl('',[Validators.required]),
      ac:new FormControl('',[Validators.required]),

      internet:new FormControl('',Validators.required),
      usrId :new FormControl(sessionStorage.getItem('username'))
    });
  }

  ngOnInit() {
  }

 async addPropertyHandler(){

    console.log(this.propertyForm.value);
    let res = await this.propertyService.createProperty(this.propertyForm.value);
    console.log(res);

  }

  onClickHandler(){
      this.locality = false;
      this.property = true;
  }
  onClickHandler2() {
    this.rental = false;
    this.property = true;
    this.locality = true;
}
onClickHandler3() {
  this.rental = true;
  this.property = true;
  this.locality = true;
  this.amenities = false;
}
}



// import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
// import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';
// import { PropertyService } from '../property.service';
// // import {NumberValidators} from 'src/app/validator/number.validator';
// import { GenericValidator } from 'src/app/validator/generic-validator';
// import { NumberValidators } from 'src/app/validator/number.validator';
// // import { Observable, fromEvent, merge } from 'rxjs';
// // import { debounceTime } from 'rxjs/operators';


// @Component({
//   selector: 'app-addproperty',
//   templateUrl: './addproperty.component.html',
//   styleUrls: ['./addproperty.component.css']
// })
// export class AddpropertyComponent implements OnInit {
//   @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
// rental:any=true;
// property:any=false;
// locality:any=true;
// amenities:any=true;
// propertyForm:FormGroup;
// isSaved:boolean;
// displayMessage: { [key: string]: string } = {};
// private validationMessages: { [key: string]: { [key: string]: string } };
// private genericValidator: GenericValidator;

//   constructor(private propertyService:PropertyService) {


//     // this.validationMessages = {
//     //   bhk: {
//     //     range: 'Number between 1 - 6'
//     //   }
//     // };
//     // this.genericValidator = new GenericValidator(this.validationMessages);
//     // , Validators.minLength(1), Validators.maxLength(6)
//   }

//   ngOnInit() {
//     this.propertyForm = new FormGroup({
//       name: new FormControl('', [Validators.required]),

//       size: new FormControl('', [Validators.required]),
//       type: new FormControl('', [Validators.required]),
//       floor: new FormControl('', [Validators.required]),
//       totalFloors:new FormControl('', [Validators.required]),
//       bhk: new FormControl('', [Validators.required ]),
//       city:new FormControl('',[Validators.required]),
//       locality:new FormControl('',[Validators.required]),
//       rent:new FormControl('',[Validators.required]),

//       deposit:new FormControl('',[Validators.required]),
//       available:new FormControl('',[Validators.required]),
//       prefTenant:new FormControl('',[Validators.required]),
//       bathrooms:new FormControl('',[Validators.required]),
//       balconies:new FormControl('',[Validators.required]),
//       lift:new FormControl('',[Validators.required]),
//       ac:new FormControl('',[Validators.required]),

//       internet:new FormControl('',Validators.required),
//       usrId :new FormControl(sessionStorage.getItem('username'))
//     });
//   }
//   // tslint:disable-next-line: use-lifecycle-interface
//   // ngAfterViewInit(): void {
//   //   // Watch for the blur event from any input element on the form.
//   //   // This is required because the valueChanges does not provide notification on blur
//   //   const controlBlurs: Observable<any>[] = this.formInputElements
//   //   .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));
//   //   // Merge the blur event observable with the valueChanges observable
//   //   // so we only need to subscribe once.
//   //   merge(this.propertyForm.valueChanges, ...controlBlurs).pipe(
//   //   debounceTime(100)
//   //   ).subscribe( value => {
//   //   this.displayMessage = this.genericValidator.processMessages(this.propertyForm);
//   //   });
//   //   }

//  async addPropertyHandler(){

//     console.log(this.propertyForm.value);
//     let res = await this.propertyService.createProperty(this.propertyForm.value);
//     console.log(res);

//   }

//   onClickHandler() {
//     if (this.propertyForm.value('bhk') < 1 || this.propertyForm.value('bhk') > 6) {
//       alert("Invalid Entries");
//     }    else {
//       this.locality = false;
//       this.property = true;
//     }

//   }
//   onClickHandler2() {
//     if (this.propertyForm.invalid) {
//       alert("Invalid Entries");
//     }    else {
//     this.rental=false;
//     this.property=true;
//     this.locality=true;
//     }
// }
// onClickHandler3() {
//   if (this.propertyForm.invalid) {
//     alert("Invalid Entries");
//   }  else {
//   this.rental = true;
//   this.property = true;
//   this.locality = true;
//   this.amenities = false;
//   }
// }
// }
