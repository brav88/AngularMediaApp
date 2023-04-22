import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesPageComponent } from './components/movies-page/movies-page.component';
import { MoviesDetailComponent } from './components/movies-detail/movies-detail.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MoviesPageComponent,
    MoviesDetailComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule
  ]
})
export class MoviesModule { }
