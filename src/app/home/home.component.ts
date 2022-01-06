import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private _MoviesService:MoviesService) { }
  trendingMovies:any[]=[];
  trendingTv:any[]=[];
  trendingPerson:any[]=[];


  imgperfex:string='https://image.tmdb.org/t/p/w500';

  ngOnInit(): void {

   this._MoviesService.getTrending('movie').subscribe((response)=>{
     this.trendingMovies = response.results.slice(0,16);

   })

   this._MoviesService.getTrending('tv').subscribe((response)=>{
    this.trendingTv = response.results.slice(0,16);

  })

  this._MoviesService.getTrending('person').subscribe((response)=>{
    this.trendingPerson = response.results.slice(0,16);

  })
  }

}
