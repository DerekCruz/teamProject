import { Component } from '@angular/core';

/**
 * Generated class for the MessageboardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'messageboard',
  templateUrl: 'messageboard.html'
})
export class MessageboardComponent {

  text: string;

  constructor() {
    console.log('Hello MessageboardComponent Component');
    this.text = 'Hello World';
  }

}
