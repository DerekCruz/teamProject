import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CoachesInfoPage } from '../coaches-info/coaches-info';
import { MethodLearningPage } from '../method-learning/method-learning';
/**
 * Generated class for the MessageBoardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message-board',
  templateUrl: 'message-board.html',
})
export class MessageBoardPage {
  coachesInfoPage = CoachesInfoPage
  methodLearningPage = MethodLearningPage 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
   changePage(){
     this.navCtrl.push(MethodLearningPage);
   }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MessageBoardPage');
  }

}
