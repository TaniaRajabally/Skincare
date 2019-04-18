import { Injectable } from '@angular/core';
import { Upload } from './upload';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
//import { FirebaseListObservable } from 'angularfire2/database-deprecated';

//import {LoginService} from '../../auth/login.service';
import { RegserviceService } from 'src/app/services/regservice.service';
import {AngularFireStorage, AngularFireUploadTask} from 'angularfire2/storage';
import * as fire from 'firebase'
import {AuthService} from '../../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class UploadService {
  dataList : AngularFireList<any> ;
user:firebase.User;
email:string;
  path: String = '/uploads';
  constructor(private storage: AngularFireStorage,
              private db: AngularFireDatabase,private serv: AuthService) {
                this.serv.getLoggedInUser().subscribe(usr => {
                  if (usr) {
              this.user = usr;
               this.email=this.user.email;
                  }
                })
  }

  uploadFile(upload: Upload) {
    let ref = fire.storage().ref();
    let upTask = ref.child(`${this.path}/${upload.file.name}`).put(upload.file);
upload.email=this.email;
    console.log(typeof upTask)
    upTask.on(fire.storage.TaskEvent.STATE_CHANGED,
      () => {
        console.log('HERE!!');
        upload.progress = (upTask.snapshot.bytesTransferred / upTask.snapshot.totalBytes) * 100;
       

      },
      err => {
        console.log(err);
      },
      () => {
        console.log('Completed');
        upload.name = upload.file.name;
        upTask.snapshot.ref.getDownloadURL().then(response => {
          upload.url = response;
         
        // this.saveDataOfFile(upload);
         //console.log(upload.user.email);
       
            
            
           // upload.email = upload.user.email;
           //console.log(upload.user.email);
           console.log( upload.name);
           console.log( upload.email);
           console.log(upload.url);
           this.dataList.push({
            name: upload.name ,
         
            email: upload.email,
            url : upload.url,

      
          });
         // this.saveDataOfFile(upload);
        });
        // console.log(upTask.snapshot.ref.getDownloadURL());

      }
    );
  }

  saveDataOfFile(upload: Upload) {
    this.db.list(`${this.path}/`).push(upload);
  }

  getData() {
    this.dataList = this.db.list('/uploads');
    return this.dataList.snapshotChanges();
  }

}
