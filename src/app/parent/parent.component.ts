import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import{BrowserModule} from '@angular/platform-browser'
import{ChildComponent} from '../child/child.component'

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,AfterViewInit {
  constructor() { }
pcount: number=0;
Message:string='';
  ngOnInit() {
    this.Message='I am from Parent';
  }
updateFromChild($event){
  this.pcount++;
}
reset(){
  this.pcount=0;
}
@ViewChild(ChildComponent) child;
ngAfterViewInit(){
  // this.Message=this.child.childMsg;
}
}
