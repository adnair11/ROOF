import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit ,OnChanges {
 redirection: string ="redirect";
 flag: string ="log out";
 pass:string = "hello";
 User:string;
 UserTemp:any;

  constructor(
    public translate: TranslateService,
    private loginService:AuthenticationService
    ) {
      // this.User = sessionStorage.getItem('username');
      // this.UserTemp =  JSON.stringify(this.User);
      console.log(this.UserTemp);
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
  ngOnChanges(changes:SimpleChanges){
    
    // this.User = sessionStorage.getItem('username');
  }
  ngOnInit() {
    // window.location.reload();
    if(this.redirection == "redirect"){
      this.flag="login";
      this.User = sessionStorage.getItem('username');
    }

    
  }

}
