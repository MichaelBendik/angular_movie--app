import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _router: Router, private _auth: AuthService) { }

  ngOnInit(): void {
  }

  goToHome(){
    this._router.navigate(['home'])
  }

  logout(){
    this._auth.logout()
  }

}
