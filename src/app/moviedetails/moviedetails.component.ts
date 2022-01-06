import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
MoviesService
@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {
  id: string = '';
  moviedetails: any = {};
  imgperfex:string='https://image.tmdb.org/t/p/w500';
  constructor(private _ActivatedRoute: ActivatedRoute, private _MoviesService: MoviesService) { }
  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.params.id;
    this._MoviesService.getMoviedetails(this.id).subscribe((Response) => {
      this.moviedetails = Response;
    })

  }

}
