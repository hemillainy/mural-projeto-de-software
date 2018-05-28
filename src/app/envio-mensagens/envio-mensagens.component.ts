import { Component, OnInit } from '@angular/core';
import { MensagensService } from '../services/mensagens.service';

@Component({
  selector: 'app-envio-mensagens',
  templateUrl: './envio-mensagens.component.html',
  styleUrls: ['./envio-mensagens.component.css']
})
export class EnvioMensagensComponent implements OnInit {
 
  public exibir = false;
  constructor(private enviarMsg: MensagensService) { }

  ngOnInit() {
  }

  public enviar(titulo: string, mensagem: string, autor: string, senha: string) {
    this.enviarMsg.enviaMensagem(titulo, mensagem, autor, senha);
  }

  public setExibir() {
    this.exibir = !this.exibir;
  }
}
