import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  width :any;
  openNav(){
    this.width  = '250px' ;
  }

  closeNav(){
    this.width  = '0px' ;
  }

  ngOnInit() {
  }

}
