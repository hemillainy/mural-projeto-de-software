import { Component, OnInit } from '@angular/core';
import { MensagensService } from '../services/mensagens.service';

@Component({
  selector: 'app-envio-mensagens',
  templateUrl: './envio-mensagens.component.html',
  styleUrls: ['./envio-mensagens.component.css']
})
export class EnvioMensagensComponent implements OnInit {
 
  constructor(private msgService: MensagensService) { }

  ngOnInit() {
  }

  public enviar(titulo: string, mensagem: string, autor: string, senha: string) {
    this.msgService.msgCreated;
    this.msgService.enviaMensagem(titulo, mensagem, autor, senha)
    .subscribe(response => { 
      this.msgService.notifyAddMsg(response);
     })
  }

}
