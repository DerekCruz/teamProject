import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComformationPage } from '../comformation/comformation';
/**
 * Generated class for the CoachesInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coaches-info',
  templateUrl: 'coaches-info.html',
})
export class CoachesInfoPage {

  comformationPage=ComformationPage

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoachesInfoPage');
  }

  goBack() {
    console.log('button was clicked')
    this.navCtrl.pop();
  }

}
