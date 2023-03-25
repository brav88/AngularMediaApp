import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/shared/services/movies/movies.service';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})
export class MoviesDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  movieId!: number;
  movieDetails: any;
  movieVideos: any;
  videoId!: string;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.movieId = params['id'];
      this.loadMovieDetail(this.movieId);
      this.loadMovieVideos(this.movieId);
    });
  }

  loadMovieDetail(movieId: number) {
    this.moviesService.getMovieDetail(movieId)
      .subscribe(
        (data: any) => {
          this.movieDetails = data;
        }
      );
  }

  saveFavoriteMovie(movieDetails: any) {

    var movie = { title: movieDetails.title, description: movieDetails.overview, dateRelease: movieDetails.release_date }

    this.moviesService.saveFavoriteMovie(movie)
      .subscribe(
        (data: any) => {
          console.log(data);

          if(data.status == 'Ok'){
            console.log("Ok");
          }
          else{
            console.log("Error");
          }
        }
      );
  }

  loadMovieVideos(movieId: number) {
    this.moviesService.getMovieVideos(movieId)
      .subscribe(
        (data: any) => {
          this.movieVideos = data.results;
        }
      );
  }
}
