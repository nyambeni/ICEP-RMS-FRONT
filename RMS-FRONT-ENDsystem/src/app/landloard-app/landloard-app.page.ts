import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { AlertController, ActionSheetController, LoadingController, Platform } from '@ionic/angular';
import {FormGroup, Validators, FormControl} from '@angular/forms';
import {ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ServiceService } from '../service.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Chart } from 'chart.js';
import * as moment from 'moment';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';


@Component({
  selector: 'app-landloard-app',
  templateUrl: './landloard-app.page.html',
  styleUrls: ['./landloard-app.page.scss'],
})
export class LandloardAppPage implements OnInit {
  momentjs: any = moment;
  
  @ViewChild('doughnutCanvas',  { static: true }) doughnutCanvas: ElementRef;
  private doughnutChart: Chart;
  
  navigate: { title: string; url: string; icon: string; }[];

  constructor(public alertCtrl: AlertController,private router: Router, private _serviceService : ServiceService,
    public actionSheetCtrl: ActionSheetController,
    private loadingCtrl: LoadingController,private platform    : Platform,
    private splashScreen: SplashScreen,
    private statusBar   : StatusBar, ) { }


  

  ngOnInit() {
    this.initializeApp();
    this.sideMenu();
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Accepted','Pending','Rejected',],
        datasets: [
          {
            label: ['0%', '100%','0'],
            data: [0, 100, 0],
            backgroundColor: [
              
              'rgb(5, 238, 64)',
              'rgb(3, 18, 83)',
              'rgb(243, 7, 7)'
               
              
            ]
              }
        ]
      }
    });
  
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sideMenu()
  {
    this.navigate =
    [
     
      {
        title : "Overview",
        url   : "/viewproperties",
        icon :"eye-outline"
       
       
      },
      {
        title : "My Proparties",
        url   : "/propertyinfo",
        icon  : "business"
      },
      {
        title : "Accreditation",
        url   : "/landloard-app",
        icon  : "clipboard"
      }


      
    ]
  }

 
  
}
