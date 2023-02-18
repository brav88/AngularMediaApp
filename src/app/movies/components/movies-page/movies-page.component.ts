import { Component, OnInit } from '@angular/core';
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


  ngOnInit(): void {
    this.moviesService.getMovies()
      .subscribe(
        (data: any) => {
          this.movies = data.results;
          this.moviesCategory = data.name;
          console.log(data.results);
        }
      );
  }
}
