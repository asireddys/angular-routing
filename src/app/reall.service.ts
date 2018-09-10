import { Injectable } from '@angular/core';
import{Http,Headers} from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class ReallService {

  constructor(private ramana:Http) {
  
    }
    raghu(ramana2){
      let a=new Headers();
      a.append('Content-Type','application/x-www-form-urlencoded');
      return this.ramana.post('http://192.168.1.189:8082/Ticket/rest/user/authenticate',ramana2,{headers:a}); 
        }
}
