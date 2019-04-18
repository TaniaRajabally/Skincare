import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthService} from '../services/auth.service';
import * as firebase from 'firebase';
import{RegserviceService} from '../services/regservice.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  user: firebase.User;
  userPresent: Boolean ;


  // openNav() {
  //   document.getElementById("mySidebar").style.width = "200px";
  //   document.getElementById("main").style.marginLeft = "200px";
  // }

  //  closeNav() {
  //   document.getElementById("mySidebar").style.width = "0";
  //   document.getElementById("main").style.marginLeft= "0";
  // }


    DataArray = [];
  name;
  email;
  contactno;
  desc;
  address;
  dob;
  gender;




    constructor(private router: Router,
      private serv: AuthService, private RegisterService: RegserviceService) {
    }

    ngOnInit() {
      
      this.serv.getLoggedInUser().subscribe(usr => {
           if (usr) {
        this.user = usr;
         
        this.userPresent = true;
        console.log(this.userPresent,this.user);
      } else {
        this.userPresent = false;
      }

            });
            this.RegisterService.getmem().subscribe(
              list => {
                  this.DataArray = list.map(item => {
                      return {
                          $key: item.key,
                          ...item.payload.val()
                      };
                  });
                  for(let i = 0; i< this.DataArray.length; i++  ){
console.log(this.DataArray[i].name);
console.log(this.DataArray[i].gender);
console.log(this.DataArray[i].Contact);
console.log(this.user.email);
           if(this.user.email ==this. DataArray[i].email)
                {  this.name=this.DataArray[i].name;
                    this.email =this. DataArray[i].email;
                    this.desc= this.DataArray[i].desc;
                    this.dob = this.DataArray[i].dob;
                    this.gender =this.DataArray[i].gender;
                    this.contactno =this. DataArray[i].Contact;
                    this.address =this. DataArray[i].address;
                
                
                console.log("valueeeeeeeeeeee");
                console.log(this.name);
                  }   
                }
              });
              

    
     }
     
   
}
