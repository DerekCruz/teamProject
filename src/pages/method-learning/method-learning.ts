import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';




@IonicPage()
@Component({
  selector: 'page-method-learning',
  templateUrl: 'method-learning.html',
})
export class MethodLearningPage {
  private problemForm : FormGroup;
 
  

  constructor( private formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams,) {
    this.problemForm = this.formBuilder.group({
      problem: ['', Validators.required],
    });
  }

  goBack() {
    this.navCtrl.pop();
  }

  logForm() {
    console.log(this.problemForm.value)
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad MethodLearningPage');
  }


}
