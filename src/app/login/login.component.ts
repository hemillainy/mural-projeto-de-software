import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public frontend: string;
  constructor(private loginService: LoginService, private router: Router) { }

  private exibir = true;
  
  public login(frontend: string) {
    this.loginService.login(frontend);
    if (this.loginService.getAutenticado()) {
      this.frontend = frontend;
      this.setExibir();
    }
  }

  public setExibir() {
    this.exibir = !this.exibir;
  }

  public getExibir(): boolean {
    return this.exibir;
  }
}
