import { Component, OnInit} from '@angular/core';
import { SeriesService } from 'src/app/shared/services/series/series.service';

@Component({
  selector: 'app-series-page',
  templateUrl: './series-page.component.html',
  styleUrls: ['./series-page.component.css']
})
export class SeriesPageComponent implements OnInit {

  constructor(private serviceService: SeriesService) {

  }

  series: any;

  ngOnInit(): void {
    this.serviceService.getSeries().subscribe(
      (data: any) => {
        this.series = data.results;
      }
    )
  }
}
