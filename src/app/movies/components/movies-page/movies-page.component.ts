import { Component } from '@angular/core';
import { MoviesService } from 'src/app/shared/services/movies/movies.service';


@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent {

  constructor(private moviesService: MoviesService) {

  }

  movies = this.moviesService.getMovies();

}
