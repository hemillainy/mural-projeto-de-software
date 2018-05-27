import { Injectable } from '@angular/core';
import { MensagensService } from './services/mensagens.service';

@Injectable()
export class EnviarMensagensService {

  constructor(private msgsService: MensagensService) { }

  public envia(titulo: string, mensagem: string, autor: string, senha: string) {
    this.msgsService.enviaMensagem(titulo, mensagem, autor, senha)
    .subscribe()
  }
}
