import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";
  errorMsg = ""
  constructor( private _auth:AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    if(this.username.trim().length===0){
      this.errorMsg = 'Username is requared';
    }else if (this.password.trim().length===0){
      this.errorMsg = 'Password is requared';
    }else {
      this.errorMsg = "";
      let res = this._auth.login(this.username, this.password)
      if (res === 200) {
        this.router.navigate(['home'])
      }
    }
  }

}
