import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  REST_API_URL: string = "http://localhost:8060/user/auth";

  valid:boolean;
  constructor(private http: HttpClient,private router:Router) { }
  
  authenticate(username, password) {
    console.log("Paras");
    const headers = new HttpHeaders({

      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa(username+':'+password)});
      sessionStorage.setItem('usernameandpassword', username+':'+password)

    console.log("pass"+password);
    this.http.post(this.REST_API_URL, {}, { headers: headers }).subscribe((res) => {
        let user = JSON.stringify(res);
        let userObj = JSON.parse(user);
        console.log("response: " + JSON.stringify(res));
        console.log("username: " + userObj.principal.username);
        sessionStorage.setItem('username', userObj.principal.username);

        
        this.router.navigate(['']);
        //  window.location.reload();
        console.log(res);
        this.valid=true;
      //  if(res)
      //  {
      //    return true;
      //  }
      //  else
      //  return false;
      
      },error=>{this.valid=false;});
      // .catch((err) => {
      //   console.log(err);
      //   return err;
      // });

    // if (username === "piyush" && password === "pass") {
    //   sessionStorage.setItem('username', username)
    //   return true;
    // } else {
    //   return false;
    // }
    window.location.reload();
    return this.valid;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('usernameandpassword')
  }
}
