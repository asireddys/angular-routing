import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { HeadRouteComponent } from './head-route/head-route.component';
import { ImpserviceComponent } from './impservice/impservice.component';
import { ReallService } from './reall.service';
import { HttpModule } from '@angular/http';
import { ShowtableComponent } from './showtable/showtable.component';
import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PracticeComponent } from './practice/practice.component';
import { ExamplesComponent } from './examples/examples.component';

const appRoutes:Routes=[
  {path:"users",component:UsersComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeadRouteComponent,
    ImpserviceComponent,
    ShowtableComponent,
    UsersComponent,
    ParentComponent,
    ChildComponent,
    PracticeComponent,
    ExamplesComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ReallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
