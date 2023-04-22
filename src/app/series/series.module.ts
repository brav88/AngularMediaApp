import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesPageComponent } from './components/series-page/series-page.component';
import { SeriesRoutingModule } from './series-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    SeriesPageComponent
  ],
  imports: [
    CommonModule,
    SeriesRoutingModule,
    SharedModule
  ]
})
export class SeriesModule { } 
