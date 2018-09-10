import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-examples',
  template: '<button (click)="sendMessage()">SendMessage</button>',
  styleUrls: ['./examples.component.css']
})
export class ExamplesComponent  {
message:string="hello all";
@Output() messageEvent= new EventEmitter<string>();
  constructor() { }
sendMessage(){
  this.messageEvent.emit(this.message)
}
  ngOnInit() {
  }

}
