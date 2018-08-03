import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


class NewForm {
  problem: String = 'I\'m having trouble making plans for my team.'
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
    this.http.post('https://zoom-server.herokuapp.com/postProblem', this.newForm)
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
