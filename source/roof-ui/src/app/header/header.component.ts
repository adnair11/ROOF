import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 redirection: string ="redirect";
 flag: string ="log out";
 pass:string = "hello";
 User:string =sessionStorage.getItem('username');

  constructor(
    public translate: TranslateService,
    private loginService:AuthenticationService
    ) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }
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
