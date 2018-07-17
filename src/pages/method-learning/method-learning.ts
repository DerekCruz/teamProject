import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import {Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the MethodLearningPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-method-learning',
  templateUrl: 'method-learning.html',
})
export class MethodLearningPage {
 
  

  constructor(public navCtrl: NavController, public navParams: NavParams,) {
    
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad MethodLearningPage');
  }


}
