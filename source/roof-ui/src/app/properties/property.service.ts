import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  REST_API_URL: string = "http://localhost:8060/properties";
  
  constructor(private http: HttpClient) { }

  reviewProperty(reviewProperty:any){
    console.log(reviewProperty);
    let uandp = sessionStorage.getItem('usernameandpassword');
    const headers = new HttpHeaders({
                                  
                                  'Content-Type':  'application/json',
                                  'Authorization': 'Basic ' + btoa(uandp)});
      console.log(headers);
      this.http.post("http://localhost:8060/review", reviewProperty,{headers: headers})
        .toPromise()
        .then((res) => {
          if(res)
          console.log("hellp"+res);
          return res;
        })
        .catch((err) => {
          console.log("Error"+err);
          return err;
        });


  }
  

  createProperty(propertyData: any) {
    console.log(propertyData);
    let uandp = sessionStorage.getItem('usernameandpassword');
    const headers = new HttpHeaders({
                                  
                                  'Content-Type':  'application/json',
                                  'Authorization': 'Basic ' + btoa(uandp)});
      console.log(headers);
      this.http.post(this.REST_API_URL, propertyData,{headers: headers})
        .toPromise()
        .then((res) => {
          console.log("hellp"+res);
          return res;
        })
        .catch((err) => {
          console.log("Error"+err);
          return err;
        });
        
    
  }
getSecurity(name){
  console.log("in security");
  return this.http.get("http://localhost:8060/user/login/"+name)
      .pipe( map(res => {
        console.log(res);
        return res;
      }));
}

editPassword(name,password){

  let promise = new Promise((resolve, reject) => {
    this.http.put("http://localhost:8060/forgot/"+name , password)
      .toPromise()
      .then((res) => {
        console.log(res);
        resolve(res);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      })
      .finally(() => {
        console.log("ends");
      });
  });
  return promise;
}
  filterProperty(city, bhk) {
    let _url;
    if(bhk===null || bhk === "0"){
       _url = this.REST_API_URL + "/" + city ;
    }
    else{
     _url = this.REST_API_URL + "/" + city + "?bhk=" + bhk;}

    return this.http.get(_url)
      .toPromise()
      .then((res: any[]) => {
        console.log(res);
        return res;
      })
      .catch(err => {
        return (err);

      })

  }

  deleteBooking(id){

    let uandp = sessionStorage.getItem('usernameandpassword');
    const headers = new HttpHeaders({
                                  
                                  'Content-Type':  'application/json',
                                  'Authorization': 'Basic ' + btoa(uandp)});
    console.log(id);
    let promise = new Promise((resolve, reject) => {
      this.http.delete("http://localhost:8060/book"+"/"+id ,{headers: headers})
        .toPromise()
        .then((res) => {
          console.log(res);
          resolve(res);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        })
        .finally(() => {
          console.log("ends");
        });
    });
    return promise;
  }

  getAllProperties(){
    let _url = "http://localhost:8060/allproperties";

    return this.http.get(_url)
      .toPromise()
      .then((res: any[]) => {
        console.log(res);
        return res;
      })
      .catch(err => {
        return (err);

      })

  }


  getProperties(){
    let uandp = sessionStorage.getItem('usernameandpassword');
    let User = sessionStorage.getItem('username');
    console.log(User);
    const headers = new HttpHeaders({
                                  
                                  'Content-Type':  'application/json',
                                  'Authorization': 'Basic ' + btoa(uandp)});
                    // HttpParams({});
    return this.http.get(this.REST_API_URL + "?userId=" +User , {headers: headers})
      .pipe( map(res => {
        console.log(res);
        return res;
      }));
    
  }
  getPropertiesById(id){
    let uandp = sessionStorage.getItem('usernameandpassword');
    const headers = new HttpHeaders({
                                  
                                  'Content-Type':  'application/json',
                                  'Authorization': 'Basic ' + btoa(uandp)});
    return this.http.get("http://localhost:8060/rentor/properties/"+id, {headers: headers})
      .pipe( map(res => {
        console.log(res);
        return res;
      }));
    
  }

  checkProperty(usrId:any,fromDate:any,toDate:any,ownerId:String,propertyId:String){
    console.log(usrId);
    let uandp = sessionStorage.getItem('usernameandpassword');
    const headers = new HttpHeaders({
                                  
                                  'Content-Type':  'application/json',
                                  'Authorization': 'Basic ' + btoa(uandp)});
      console.log(headers);
     return this.http.post("http://localhost:8060/check",{ usrId,fromDate,toDate,ownerId,propertyId},{headers: headers})
        .toPromise()
        .then((res) => {
          if(res)
          console.log("hellp"+res);
          return res;
        })
        .catch((err) => {
          console.log("Error"+err);
          return err;
        });
        
    
  }

  bookProperty(usrId:any,fromDate:any,toDate:any,ownerId:String,propertyId:String){
    console.log(usrId);
    let uandp = sessionStorage.getItem('usernameandpassword');
    const headers = new HttpHeaders({
                                  
                                  'Content-Type':  'application/json',
                                  'Authorization': 'Basic ' + btoa(uandp)});
      console.log(headers);
     return this.http.post("http://localhost:8060/book",{ usrId,fromDate,toDate,ownerId,propertyId},{headers: headers})
        .toPromise()
        .then((res) => {
          if(res)
          console.log("hellp"+res);
          return res;
        })
        .catch((err) => {
          console.log("Error"+err);
          return err;
        });
        
    
  }

  getBookingsByUsrId(usrId){
    console.log("userId-"+usrId);
    let uandp = sessionStorage.getItem('usernameandpassword');
    const headers = new HttpHeaders({
                                  
                                  'Content-Type':  'application/json',
                                  'Authorization': 'Basic ' + btoa(uandp)});
      console.log(headers);
      return this.http.get("http://localhost:8060/user/book"+usrId,{headers:headers})
      .pipe( map(res => {
        console.log(res);
        return res;
      }));

  }

  getBookingsByOwnerId(ownerId){

    console.log("userId-"+ownerId);
    let uandp = sessionStorage.getItem('usernameandpassword');
    const headers = new HttpHeaders({
                                  
                                  'Content-Type':  'application/json',
                                  'Authorization': 'Basic ' + btoa(uandp)});
      console.log(headers);
      return this.http.get("http://localhost:8060/user/properties/book"+ownerId,{headers:headers})
      .pipe( map(res => {
        console.log(res);
        return res;
      }));

  }
  

  getUserById(id){
    
    let uandp = sessionStorage.getItem('usernameandpassword');
    const headers = new HttpHeaders({
                                  
                                  'Content-Type':  'application/json',
                                  'Authorization': 'Basic ' + btoa(uandp)});
    return this.http.get("http://localhost:8060/user/login/"+id, {headers: headers})
      .pipe( map(res => {
        console.log(res);
        return res;
      }));
  }
 


  deletePropertiesById(propertyData: any) {
    let uandp = sessionStorage.getItem('usernameandpassword');
    const headers = new HttpHeaders({
                                  
                                  'Content-Type':  'application/json',
                                  'Authorization': 'Basic ' + btoa(uandp)});
    console.log(propertyData);
    let promise = new Promise((resolve, reject) => {
      this.http.delete(this.REST_API_URL+"/"+propertyData ,{headers: headers})
        .toPromise()
        .then((res) => {
          console.log(res);
          resolve(res);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        })
        .finally(() => {
          console.log("ends");
        });
    });
    return promise;
  }


  updateProperty(propertyData: any) {
    let uandp = sessionStorage.getItem('usernameandpassword');
    const headers = new HttpHeaders({
                                  
                                  'Content-Type':  'application/json',
                                  'Authorization': 'Basic ' + btoa(uandp)});
    console.log(propertyData);
    let promise = new Promise((resolve, reject) => {
      this.http.put(this.REST_API_URL+"/"+propertyData._id , propertyData,{headers: headers})
        .toPromise()
        .then((res) => {
          console.log(res);
          resolve(res);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        })
        .finally(() => {
          console.log("ends");
        });
    });
    return promise;
  }

  updateUser(name:String,userData:any)
  {

    let uandp = sessionStorage.getItem('usernameandpassword');
    const headers = new HttpHeaders({
                                  
                                  'Content-Type':  'application/json',
                                  'Authorization': 'Basic ' + btoa(uandp)});
    console.log(userData);
    let promise = new Promise((resolve, reject) => {
      this.http.put("http://localhost:8060/user/edit/"+name , userData,{headers: headers})
        .toPromise()
        .then((res) => {
          console.log(res);
          resolve(res);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        })
        .finally(() => {
          console.log("ends");
        });
    });
    return promise;

  }
}
