import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  constructor(private http: HttpClient) { }

  getSongs(){
    return this.http.get('https://api.themoviedb.org/3/tv/popular?api_key=5f2b5e0ae3a00a80c918135739ad8f3f&language=en-US&page=1');
  } 
}
