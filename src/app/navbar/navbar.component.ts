import { Component, OnInit } from '@angular/core';
import { EnvioMensagensComponent } from '../envio-mensagens/envio-mensagens.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  exibirEnvio = false;
  exibirPesquisa = false;
  constructor(private route: Router) { }

  ngOnInit() {
  }

  setExibirEnvio() {
    this.exibirEnvio = !this.exibirEnvio;
  }

  setExibirPesquisa() {
    this.exibirPesquisa = !this.exibirPesquisa;
  }

  attMural() {
    this.route.navigate(['/inicio']);
  }

}
