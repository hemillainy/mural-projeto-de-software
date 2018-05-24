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

  public exibir = true;
  
  public login(frontend: string) {
    this.loginService.getFronteds()
    .subscribe(frontends => {
      if (frontends.indexOf(frontend) != -1) {
        this.frontend = frontend;
        this.exibir = false;
        this.router.navigate(['/mural']);
      }
    })
  }

  public setExibir() {
    this.exibir = !this.exibir;
  }
}
