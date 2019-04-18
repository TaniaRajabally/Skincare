import { Component, OnInit } from '@angular/core';
import { UploadService } from '../shared/upload.service';
import { Upload } from '../shared/upload';
import * as _ from "lodash";
import {AuthService} from '../../services/auth.service';
import { AngularFireList } from 'angularfire2/database';
@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent {

  selectedFiles: FileList;
  currentUpload: Upload;
  user: firebase.User;
  userPresent: Boolean ;
  dataList : AngularFireList<any>;
  constructor(private upSvc: UploadService,private serv: AuthService) { }
  dataArray =[];
  cdataArray = [];
  j = 0;
  detectFiles(event) {
      this.selectedFiles = event.target.files;
  }

  uploadSingle() {
    let file = this.selectedFiles.item(0)
    this.currentUpload = new Upload(file);
    this.upSvc.uploadFile(this.currentUpload);
    console.log(this.user.email);
  }

  

  // uploadMulti() {
  //   let files = this.selectedFiles
  //   let filesIndex = _.range(files.length)
  //   _.each(filesIndex, (idx) => {
  //     this.currentUpload = new Upload(files[idx]);
  //     this.upSvc.uploadFile(this.currentUpload)}
  //   )
  // }
   ngOnInit(){
     this.j = 0;
    this.serv.getLoggedInUser().subscribe(usr => {
      if (usr) {
   this.user = usr;
      }
      })
      this.upSvc.getData().subscribe(list => 
        {
          this.dataArray = list.map(item => {
            return {
                $key: item.key,
                ...item.payload.val()
            };
        });
        for(let i = 0; i< this.dataArray.length; i++  ){
          console.log(this.dataArray[i].name);
          console.log(this.dataArray[i].email);
          console.log(this.dataArray[i].url);
         // console.log(this.user.email);
          if(this.dataArray[i].email == this.user.email)
          {
              this.cdataArray[this.j] = this.dataArray[i].url;
              console.log("sdfgdxgcfmk");
              console.log(this.cdataArray[this.j]);
              this.j++;
          }
        }
      });
        }

}