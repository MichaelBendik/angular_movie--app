import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _http: HttpClient, private _router: Router ) { }

  trendingMovies: any;
  theatreMovies: any;
  popularMovies: any;

  ngOnInit(): void {
    this.getTrendingMovies()
    this.getTheatreMovies()
    this.getPopularMovies()
  }

  getTrendingMovies(){
    this._http.get('http://localhost:4200/assets/data/trending-movies.json')
    .subscribe((movies)=>{
      this.trendingMovies = movies;
    })
  }
  getTheatreMovies(){
    this._http.get('http://localhost:4200/assets/data/theatre-movies.json')
    .subscribe((movies)=>{
      this.theatreMovies = movies;
    })
  }
  getPopularMovies(){
    this._http.get('http://localhost:4200/assets/data/popular-movies.json')
    .subscribe((movies)=>{
      this.popularMovies = movies;
    })
  }

  goToMovie(type:string, id:string){
    this._router.navigate(['movie', type, id])
  }
}
