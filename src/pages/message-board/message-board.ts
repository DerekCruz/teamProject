import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CoachesInfoPage } from '../coaches-info/coaches-info';
import { MethodLearningPage } from '../method-learning/method-learning';
import { FolderPage } from '../folder/folder'
import { HomePage } from '../home/home'
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
  folderPage = FolderPage 
  homePage = HomePage 
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
   addProblem(){
     this.navCtrl.push(MethodLearningPage);
   }
   changePage(){
     this.navCtrl.push(CoachesInfoPage);

   }
   goToFolder(){
     this.navCtrl.push(FolderPage);
   }
   logout(){
    this.navCtrl.pop();   }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MessageBoardPage');
  }

}
