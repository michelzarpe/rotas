import { Usuario } from './usuario';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private usuario:Usuario = {};


  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  login(){
    this.authService.fazerLogin(this.usuario);
  }

}
