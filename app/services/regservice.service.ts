import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
@Injectable({
  providedIn: 'root'
})
export class RegserviceService {
  
  constructor(private firebase: AngularFireDatabase) { }
  memList: AngularFireList<any>;

  mem = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl('', Validators.required),
    Contact: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    desc: new FormControl('', Validators.required),
    
  });

  getmem() {
    this.memList = this.firebase.list('/mem');
    return this.memList.snapshotChanges();
  }

  insertmem(mem) {
    console.log("inside survey");
    console.log(mem);


    this.memList.push({
      name: mem.name ,
      Contact: mem.Contact,
      email: mem.email,
     address:mem.address,
     gender:mem.gender,
     dob:mem.dob,
     desc:mem.desc,

    });
    // this.formList.push("reached data");
  }
}
