import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  trendingMovies: any;

  ngOnInit(): void {
    this.getTrendingMovies()
  }

  getTrendingMovies(){
    // this.http.get('Z:/ANOTHER/PORTFOLIO_PROJECTS/ANGULAR - FIRST PROJECT/movies-pet/src/assets/data/trending-movies.json')
    // .subscribe((movies)=>{
    //   this.trendingMovies = movies;
    // console.log(this.trendingMovies)})
  }
}
