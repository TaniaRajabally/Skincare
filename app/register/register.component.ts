import { Component, OnInit } from '@angular/core';
import { RegserviceService } from 'src/app/services/regservice.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};
  submitted: boolean;
  showSuccessMessage: boolean;
  constructor(private RegistermemService: RegserviceService) { }

  

  ngOnInit() {
    this.RegistermemService.getmem().subscribe(res => {
      console.log(res)
    });
   
  }
  onSubmit() {
    console.log('Function called');
    console.log(JSON.stringify((this.model)));
    alert('Your details are successfully saved!');
    this.submitted= true;
    this. RegistermemService.insertmem(this.model);
    this.showSuccessMessage = true;
    // setTimeout(handler: () => this.showSuccessMessage= false, timeout: 3000 );
    this.submitted = false;
    this.RegistermemService.mem.reset();
    this.RegistermemService.mem.setValue({
      $key: null,
      name: null,
      
      Contact:null,
      
      email:null,
     address:null,
     gender:null,
     dob:null,
     desc:null,

    });
  }

}