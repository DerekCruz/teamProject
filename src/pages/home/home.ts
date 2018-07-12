import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MessageBoardPage } from '../message-board/message-board';
import { SignUpPage } from '../sign-up/sign-up';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  messageBoardPage = MessageBoardPage;
signUpPage = SignUpPage

  constructor(public navCtrl: NavController ) {

  }

}
