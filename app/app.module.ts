import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { SliderModule } from 'angular-image-slider';

import { HttpClientModule } from '@angular/common/http';

//for pop-up
//import { PopupModule } from '@progress/kendo-angular-popup';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


//import { AppRoutingModule } from './app-routing.module';
//import { MemberregComponent } from './register/memberreg/memberreg.component';
import { environment } from '../environments/environment'; 

//import { RouterModule } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SignupComponent } from './signup/signup.component';

import { UploadFormComponent } from './uploads/upload-form/upload-form.component';
import { AngularFireStorage } from 'angularfire2/storage';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DetailsComponent } from './details/details.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SignupComponent,
    HomeComponent,
    UploadFormComponent,
    DetailsComponent,
    HomeComponent,

    FeaturesComponent,

    AboutComponent,


  ],
  imports: [
    BrowserModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.fireconfig), 
    FormsModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    
    BrowserAnimationsModule,
   
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full' },
      {path: 'register', component: RegisterComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'upload', component: UploadFormComponent},
      {path: 'home', component: HomeComponent},
      {path: 'features', component: FeaturesComponent},

      {path: 'details', component: DetailsComponent},
    ]),
    HttpClientModule,
    MDBBootstrapModule.forRoot(),

],
providers: [AngularFireAuthModule, AngularFireStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
