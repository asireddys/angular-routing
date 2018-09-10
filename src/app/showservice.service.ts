import { Injectable } from '@angular/core';
import{Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ShowserviceService {

  constructor( private showtable:Http) { }
  
  getShow() {
    let b=new Headers();
    return this.showtable.get("https://api.myjson.com/bins/hsuum");
  }
getValue(){
  let c=new Headers();
  debugger;
  return this.showtable.get("https://api.myjson.com/bins/qdqiy");
}
getChange(){
  let d=new Headers();
  debugger;
  return this.showtable.get("https://api.myjson.com/bins/11p6qi");
}
getUpdate(){
  let e=new Headers();
  debugger;
  return this.showtable.get("https://api.myjson.com/bins/i23hm");
}
getResize(){
  let f=new Headers();
  return this.showtable.get("https://api.myjson.com/bins/16rl3e");
}
getCompliance(){
  let g=new Headers();
  debugger;
  return this.showtable.get("https://api.myjson.com/bins/10egmy");
}
}
