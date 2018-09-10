import { Component } from '@angular/core';
import {ExamplesComponent} from "../examples/examples.component"
@Component({
  selector: 'app-practice',
  template: 'Message:{{message}}<app-examples (messageEvent)="receiveMessage($event)"></app-examples>',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent  {

  constructor() { }
  message:string;
  receiveMessage($event){
    this.message=$event
  }
  }
 


