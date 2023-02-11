import { Injectable } from '@angular/core';
import { moviesData } from 'src/data/movies.data';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  getMovies(){
    return moviesData;
  }
}
