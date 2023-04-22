import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SongsRoutingModule } from './songs-routing.module';
import { SongsPageComponent } from './components/songs-page/songs-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SongsPageComponent
  ],
  imports: [
    CommonModule,
    SongsRoutingModule,
    SharedModule
  ]
})
export class SongsModule { }
