import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 redirection: string ="redirect";
 flag: string ="log out";

  constructor() { }
  width :any;
  openNav(){
    this.width  = '250px' ;
  }

  closeNav(){
    this.width  = '0px' ;
  }

  ngOnInit() {
    if(this.redirection == "redirect"){
      this.flag="login";
    }
  }

}
