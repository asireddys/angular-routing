import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input('parentcount')
  count:number;
  @Output()
  change:EventEmitter<number>=new EventEmitter<number>();
  
  childMsg:string="Hi I am from child";
  updateCount(){
    debugger;
    this.count++;
    this.change.emit(this.count);
  }
  constructor() { }

  ngOnInit() {
  }

}
