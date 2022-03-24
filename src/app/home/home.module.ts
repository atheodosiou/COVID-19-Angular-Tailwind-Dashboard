import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { AllStatsWidgetComponent } from './components/all-stats-widget/all-stats-widget.component';
import { SharedModule } from '../shared/shared.module';
import { TodayStatsWidgetComponent } from './components/today-stats-widget/today-stats-widget.component';

const components = [
  AllStatsWidgetComponent,
  TodayStatsWidgetComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: HomeComponent
    }]),
    SharedModule
  ],
  declarations: [HomeComponent, ...components]
})
export class HomeModule { }
