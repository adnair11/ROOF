import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  title = 'Upload Multiple Files in Angular 4';

  constructor (private http: HttpClient) {  }

  myFiles:string [] = [];
  sMsg:string = '';

  ngOnInit () {  }

  getFileDetails (e) {
    //console.log (e.target.files);
    for (var i = 0; i < e.target.files.length; i++) { 
      this.myFiles.push(e.target.files[i]);
    }
  }

  uploadFiles () {
    const file = new FormData();
    
    for (var i = 0; i < this.myFiles.length; i++) { 
      file.append("fileUpload", this.myFiles[i]);
      console.log(this.myFiles[i]);
    }
    
    console.log("upload data is "+file);
    this.http.post('http://localhost:8060/upload/1234', file, {
      reportProgress: true,
      observe: 'events'
    })
      .subscribe(event => {
        // console.log(event); // handle event here
      });
  }
  }