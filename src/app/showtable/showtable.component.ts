import { Component, OnInit } from '@angular/core';
import { ShowserviceService } from 'src/app/showservice.service';

@Component({
  selector: 'app-showtable',
  templateUrl: './showtable.component.html',
  styleUrls: ['./showtable.component.css']
})
export class ShowtableComponent implements OnInit {
Show;
name;
  constructor(private Shown:ShowserviceService) { }


  ngOnInit() {
      
      this.Shown.getShow().subscribe( res=>{ this.Show = res.json();
      
        console.log(this.Show);
        this.name =this.Show.records;
      }
    )

    }
  

}
