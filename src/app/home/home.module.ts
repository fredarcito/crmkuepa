import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ListCallComponent } from './components/list-call/list-call.component';
import { GrupalComponent } from './components/grupal/grupal.component';
import { CardResumeComponent } from './components/card-resume/card-resume.component';
import { CardItemResumeComponent } from './components/card-item-resume/card-item-resume.component';



@NgModule({
  declarations: [HomeComponent, StatisticsComponent, ListCallComponent, GrupalComponent, CardResumeComponent, CardItemResumeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
