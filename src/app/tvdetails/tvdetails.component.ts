import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-tvdetails',
  templateUrl: './tvdetails.component.html',
  styleUrls: ['./tvdetails.component.css']
})
export class TvdetailsComponent implements OnInit {
  id: string = '';
  tvdetails: any = {};
  imgperfex: string = 'https://image.tmdb.org/t/p/w500';
  constructor(private _ActivatedRoute: ActivatedRoute, private _MoviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.params.id;
    this._MoviesService.getseriesdetails(this.id).subscribe((Response) => {
      this.tvdetails = Response;

    })
  }

}
