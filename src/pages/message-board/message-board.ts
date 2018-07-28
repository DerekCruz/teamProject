import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CoachesInfoPage } from '../coaches-info/coaches-info';
import { MethodLearningPage } from '../method-learning/method-learning';
import { FolderPage } from '../folder/folder'
import { HomePage } from '../home/home'
import { HttpClient } from '@angular/common/http';



@IonicPage()
@Component({
  selector: 'page-message-board',
  templateUrl: 'message-board.html',
})
export class MessageBoardPage implements OnInit {
  coachesInfoPage = CoachesInfoPage
  methodLearningPage = MethodLearningPage
  folderPage = FolderPage
  homePage = HomePage
  public problems: any = [];


  constructor(private http: HttpClient, public navCtrl: NavController, public navParams: NavParams) {
  }
  addProblem() {
    this.navCtrl.push(MethodLearningPage);
  }
  changePage() {
    this.navCtrl.push(CoachesInfoPage);

  }
  goToFolder() {
    this.navCtrl.push(FolderPage);
  }
  logout() {
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessageBoardPage');
    this.http.get('https://zoom-server.herokuapp.com/pullProblem').subscribe(response => {
      console.log(response);
      this.problems = response;
    },
      err => {
        console.log('err');
      });
  }
  ionViewWillEnter() {
    this.http.get('https://zoom-server.herokuapp.com/pullProblem').subscribe(response => {
      console.log(response);
      this.problems = response;
    },
      err => {
        console.log('err');
      });
  }

  ngOnInit() {
    this.http.get('https://zoom-server.herokuapp.com/pullProblem').subscribe(response => {
      console.log(response);
      this.problems = response;
    },
      err => {
        console.log('err');
      });
  }


}
