import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-poprate',
  templateUrl: './poprate.page.html',
  styleUrls: ['./poprate.page.scss'],
})
export class PopratePage implements OnInit {

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
  }

  closePop(){
    this.popoverController.dismiss();
  }

}
