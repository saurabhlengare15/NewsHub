import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HealthComponent } from './health/health.component';
import { ScienceComponent } from './science/science.component';
import { SportsComponent } from './sports/sports.component';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadingComponent } from './topheading/topheading.component';

const routes: Routes = [
  {
    path:'',
    component:TopheadingComponent
  },
  {
    path:'technews',
    component:TechnewsComponent
  },
  {
    path:'business',
    component:BusinessComponent
  },
  {
    path:'entertainment',
    component:EntertainmentComponent
  },
  {
    path:'health',
    component:HealthComponent
  },
  {
    path:'science',
    component:ScienceComponent
  },
  {
    path:'sports',
    component:SportsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
