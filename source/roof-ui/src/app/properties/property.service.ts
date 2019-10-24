import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  REST_API_URL: string = "http://localhost:8060/properties";
  
  constructor(private http: HttpClient) { }
  

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
  filterProperty(city, bhk) {
    let _url = this.REST_API_URL + "/" + city + "?bhk=" + bhk;

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
}
