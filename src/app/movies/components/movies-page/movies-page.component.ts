import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/shared/services/movies/movies.service';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit {

  constructor(private moviesService: MoviesService) {

  }

  movies: any;
  moviesCategory!: string;

  @Input()
  moviesPage!: number;

  ngOnInit(): void {
    this.moviesService.getMovies()
      .subscribe(
        (data: any) => {
          this.movies = data.results;
          this.moviesCategory = data.name;
        }
      );
  }

  loadMoviePage(moviePage: number) {
    this.moviesService.getMoviePage(moviePage)
      .subscribe(
        (data: any) => {
          this.movies = data.results;
          this.moviesCategory = data.name;
        }
      );
  }
}
