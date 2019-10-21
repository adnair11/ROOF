import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  REST_API_URL: string = "http://localhost:8060/rentor/properties";
  constructor(private http: HttpClient) { }

  createProperty(propertyData: any) {
    console.log(propertyData);
    let headers = new HttpHeaders({
                                  
                                  'Content-Type':  'application/json',
                                  'Authorization': 'Basic ' + btoa('piyush:piyush')});
    
      this.http.post(this.REST_API_URL, propertyData,{headers})
        .toPromise()
        .then((res) => {
          console.log(res);
          return res;
        })
        .catch((err) => {
          console.log(err);
          return err;
        });
        
    
  }
  getProperties(){
    return this.http.get(this.REST_API_URL)
      .pipe( map(res => {
        console.log(res);
        return res;
      }));
    
  }
  getPropertiesById(id){
    return this.http.get(this.REST_API_URL+'/'+id)
      .pipe( map(res => {
        console.log(res);
        return res;
      }));
    
  }




  deletePropertiesById(propertyData: any) {
    console.log(propertyData);
    let promise = new Promise((resolve, reject) => {
      this.http.delete(this.REST_API_URL+"/"+propertyData , propertyData)
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
    console.log(propertyData);
    let promise = new Promise((resolve, reject) => {
      this.http.put(this.REST_API_URL+"/"+propertyData._id , propertyData)
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