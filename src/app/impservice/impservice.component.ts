import { Component, OnInit } from '@angular/core';
import { ReallService } from '../reall.service';
@Component({
  selector: 'app-impservice',
  templateUrl: './impservice.component.html',
  styleUrls: ['./impservice.component.css']
})
export class ImpserviceComponent implements OnInit {
email;password;result
  constructor(private raju:ReallService) { }
  submerge(){

    const credentials = 'email=' +this.email + '&password=' + this.password;
   this.raju.raghu(credentials).subscribe(res=>{
      this.result = res.json();
      alert(this.result);
   }  
   )
  }
  ngOnInit() {
  }

}
