import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 redirection: string ="redirect";
 flag: string ="log out";
 User:string =sessionStorage.getItem('username');

  constructor(private loginService:AuthenticationService) { }
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
