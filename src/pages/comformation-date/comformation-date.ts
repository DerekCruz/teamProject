import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-comformation-date',
  templateUrl: 'comformation-date.html',
})
export class ComformationDatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComformationDatePage');
  }

  goBack() {
    this.navCtrl.pop();
  }

}
