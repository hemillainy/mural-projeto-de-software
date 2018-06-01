import { Component, OnInit } from '@angular/core';
import { EnvioMensagensComponent } from '../envio-mensagens/envio-mensagens.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private exibirEnvio = false;
  constructor(private route: Router) { }

  ngOnInit() {
  }

  public setExibirEnvio() {
    this.exibirEnvio = !this.exibirEnvio;
  }

  public attMural() {
    this.route.navigate(['/inicio']);
  }

}
