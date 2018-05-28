import { Component, OnInit } from '@angular/core';
import { EnvioMensagensComponent } from '../envio-mensagens/envio-mensagens.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private envioMsg: EnvioMensagensComponent;
  constructor() { }

  ngOnInit() {
  }

  public setExibirEnvio(){
    this.envioMsg.setExibir();
  }
}
