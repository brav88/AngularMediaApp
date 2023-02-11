import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesPageComponent } from './components/series-page/series-page.component';
import { SeriesRoutingModule } from './series-routing.module';



@NgModule({
  declarations: [
    SeriesPageComponent
  ],
  imports: [
    CommonModule,
    SeriesRoutingModule
  ]
})
export class SeriesModule { } 
