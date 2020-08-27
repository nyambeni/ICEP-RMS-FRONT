import { Component, OnInit, Input } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {ServiceService} from './../service.service';
import { NgModule, Pipe} from '@angular/core';
import { Router } from  "@angular/router";
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Http } from '@angular/http';


@Component({
  selector: 'app-landlord-reg',
  templateUrl: './landlord-reg.page.html',
  styleUrls: ['./landlord-reg.page.scss'],
})
export class LandlordRegPage implements OnInit {

  @Input() lordData= {email_address:" " ,password:" ",password_confirm:" "}
  navCtrl: any;

  
  constructor( private _serviceService : ServiceService, public formBuilder: FormBuilder,
    private router: Router,
    public http:Http ) {}
    addLords: any = [];

 

  ngOnInit() {
    
    
  }


landlordreg(){
  this._serviceService.postLandlord(this.lordData).subscribe(
    data =>
    console.log(data));
   
   
}
 checKPwd(){

if(this.lordData.password==this.lordData.password_confirm){
  this.landlordreg();
  
}

else{
  console.log("password does not match!")
}

 }


}


