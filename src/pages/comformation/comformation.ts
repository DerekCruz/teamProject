import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComformationDatePage } from '../comformation-date/comformation-date'
/**
 * Generated class for the ComformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comformation',
  templateUrl: 'comformation.html',
})
export class ComformationPage {
  comformationDatePage = ComformationDatePage

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComformationPage');
  }

}
