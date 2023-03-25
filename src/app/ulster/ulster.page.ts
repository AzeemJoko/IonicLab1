import { Component, OnInit } from '@angular/core';
import { NavComponentWithProps, NavController } from '@ionic/angular';

@Component({
  selector: 'app-ulster',
  templateUrl: './ulster.page.html',
  styleUrls: ['./ulster.page.scss'],
})
export class UlsterPage implements OnInit {
  navCtrl: any;

  constructor(navCtrl:NavController) { }

  ngOnInit() {
  }
  goUlster(){
    this.navCtrl.navigateForward('/ulster');
  }
}
