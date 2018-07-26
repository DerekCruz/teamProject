import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


class NewForm {
  problem: String
}


@IonicPage()
@Component({
  selector: 'page-method-learning',
  templateUrl: 'method-learning.html',
})
export class MethodLearningPage {
  public newForm : NewForm;
 
  

  constructor( private http: HttpClient, public navCtrl: NavController, public navParams: NavParams,) {
   this.newForm = new NewForm();
  }

  

  goBack() {
    this.navCtrl.pop();
  }

  logForm() {
    console.log(this.newForm)
    this.http.post('http://localhost:8080/postProblem', this.newForm)
    .subscribe(
      result => {
        console.log(result);
        alert('Message Sent!')
      },
      err => {
        console.log(err)
      });
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad MethodLearningPage');
  }


}
