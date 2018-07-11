import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MessageBoardPage } from '../message-board/message-board';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  messageBoardPage = MessageBoardPage;

  constructor(public navCtrl: NavController ) {

  }

}
