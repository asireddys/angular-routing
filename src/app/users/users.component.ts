import { Component, OnInit } from '@angular/core';
import { ShowserviceService } from 'src/app/showservice.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
See;Display;Saw;Report;Sawn;Redirect;Sawns;Reconnect;Swing;Swingconnect;
sum=0;sum1=0;sum2=0;sum3=0;sum4=0;
avg=0;
avg1=0;
avg2=0;
avg3=0;
avg4=0;
  constructor(private Disc:ShowserviceService) { 
  }

  ngOnInit() {
    this.Disc.getValue().subscribe( res=>{ this.See = res.json();
        console.log(this.See);
        this.Display =this.See.Governance;
        for(var i=0;i<this.Display.length;i++){
          this.sum+=parseInt(this.Display[i].Performance);
          console.log(this.sum);
          this.avg = this.sum/this.Display.length;
          console.log(this.avg);
          };
      }
    );
    this.Disc.getChange().subscribe(res=>{this.Saw=res.json();
      console.log(this.Saw);
    this.Report=this.Saw.Customer;
    for(var i=0;i<this.Report.length;i++){
      this.sum+=parseInt(this.Report[i].Performance);
      console.log(this.sum);
      this.avg = this.sum/this.Report.length;
      console.log(this.avg);
      };
  
  });

    this.Disc.getUpdate().subscribe(res=>{this.Sawn=res.json();
      console.log(this.Sawn);
    this.Redirect=this.Sawn.People;
    for(var i=0;i<this.Redirect.length;i++){
      this.sum+=parseInt(this.Redirect[i].Performance);
      console.log(this.sum);
      this.avg = this.sum/this.Redirect.length;
      console.log(this.avg);
      };
  });

    this.Disc.getResize().subscribe(res=>{this.Sawns=res.json();
    console.log(this.Sawns);
    this.Reconnect=this.Sawns.Engineering;
    for(var i=0;i<this.Reconnect.length;i++){
      this.sum+=parseInt(this.Reconnect[i].Performance);
      console.log(this.sum);
      this.avg = this.sum/this.Reconnect.length;
      console.log(this.avg);
      };
  
    });
    this.Disc.getCompliance().subscribe(res=>{this.Swing=res.json();
      this.Swingconnect=this.Swing.Compliance;
    
    });
}
}