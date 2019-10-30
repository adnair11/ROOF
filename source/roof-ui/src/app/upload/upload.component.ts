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

  myFiles:File [] = [];
  sMsg:string = '';
  selectedFile:File[]=[];
  ngOnInit () {  }


  onFileChanged(event) {
    // this.selectedFile[] = event.target.files[0];
    for(let i=0;i<event.target.files.length;i++){
      this.selectedFile.push(event.target.files[i]);
    }

  }
  uploadFiles () {
    const file2 = new FormData();
    const uploadData = new FormData();
    for(let i=0;i<this.selectedFile.length;i++)
      uploadData.append('file', this.selectedFile[i], this.selectedFile[i].name);
    this.selectedFile.length=0;
    console.log("upload data is "+uploadData);
    this.http.post('http://localhost:8060/upload/1234', uploadData, {
      reportProgress: true
      // observe: 'events'
    })
      .subscribe(event => {
        // console.log(event); // handle event here
      });
  }
    

    
  }
  