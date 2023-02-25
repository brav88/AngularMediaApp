import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesDetailComponent } from './components/movies-detail/movies-detail.component';
import { MoviesPageComponent } from './components/movies-page/movies-page.component';

const routes: Routes = [  
  { path: '', component: MoviesPageComponent },
  { path: ':id', component: MoviesDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
