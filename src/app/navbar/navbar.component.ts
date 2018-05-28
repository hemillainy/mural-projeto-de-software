import { Component, OnInit } from '@angular/core';
import { EnvioMensagensComponent } from '../envio-mensagens/envio-mensagens.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private exibirEnvio = false;
  constructor() { }

  ngOnInit() {
  }

  public setExibirEnvio() {
    this.exibirEnvio = !this.exibirEnvio;
  }
}
