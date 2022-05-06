import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  type = ''
  id = ''
  url =''
  movies:any
  movie:any

  constructor(private _route: ActivatedRoute, private _http:HttpClient) { }

  ngOnInit(): void {
    this.type = this._route.snapshot.params['type']
    this.id = this._route.snapshot.params['id']
    this.url = `http://localhost:4200/assets/data/${this.type}-movies.json`
    
    this.getMovie()
  }

  getMovie() {
    this._http.get(this.url).subscribe((movies) => {
      this.movies = movies
      let index = this.movies.findIndex(
        (movie: { id: string; }) => movie.id == this.id)
        if (index > -1){
          this.movie = this.movies[index]
        }
    })
  }
}
