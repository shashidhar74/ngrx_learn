import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterdisplayComponent } from './component/counterdisplay/counterdisplay.component';
import { CounterComponent } from './component/counter/counter.component';
import { HomeComponent } from './component/home/home.component';
import { BlogComponent } from './component/blog/blog.component';

const routes: Routes = [
  {
    path:'home', component:HomeComponent
  },
  {
    path:'counter', component:CounterComponent
  },
  {
    path:'blog', component:BlogComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
