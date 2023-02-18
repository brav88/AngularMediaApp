import { Component, OnInit } from '@angular/core';
import { SongsService } from 'src/app/shared/services/songs/songs.service';

@Component({
  selector: 'app-songs-page',
  templateUrl: './songs-page.component.html',
  styleUrls: ['./songs-page.component.css']
})
export class SongsPageComponent implements OnInit {

  constructor(private songService: SongsService) { }

  songs: any;

  ngOnInit(): void {
    this.songService.getSongs().subscribe(
      (data: any) => {
        this.songs = data.results;
      }
    )
  }
}
