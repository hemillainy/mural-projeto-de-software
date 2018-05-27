import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public user = 'hemillainy';
  constructor(private loginService: LoginService, private router: Router) { }

  private exibir = true;
  
  public login(user: string) {
    this.loginService.login(user);
    if (this.loginService.getAutenticado()) {
      this.user = user;
      this.setExibir();
    }
  }

  public setExibir() {
    this.exibir = !this.exibir;
  }

  public getExibir() {
    return this.exibir;
  }

  public getUser(): string{
    return this.user;
  }

}
