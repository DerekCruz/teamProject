import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { MessageBoardPage } from '../message-board/message-board';

@IonicPage()
@Component({
  selector: 'page-comformation-date',
  templateUrl: 'comformation-date.html',
})
export class ComformationDatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private localNotifications:LocalNotifications) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComformationDatePage');
  }

  goBack() {
    this.navCtrl.pop();
  }
  time(){
    this.localNotifications.schedule({
      text: 'Your meeting is set',
      trigger: {at: new Date()},
      led: 'FF0000',
      sound: null
    });
    this.navCtrl.setRoot(MessageBoardPage);
  }
  

}
