import { MensagensService } from './../services/mensagens.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  opcao: string = "";
  constructor(private msgService: MensagensService) { }

  ngOnInit() {
  }

  search(atributo: string){
    let array = [];
    if (this.opcao == "titulo_p") {
      array = this.msgService.mensagens.filter(msg => msg.title.toLowerCase().indexOf(atributo.toLowerCase()) != -1);
    } else if (this.opcao == "mensagem_p") {
      array = this.msgService.mensagens.filter(msg => msg.msg.toLowerCase().indexOf(atributo.toLowerCase()) != -1)
    } else {
      array = this.msgService.mensagens.filter(msg => msg.author.toLowerCase().indexOf(atributo.toLowerCase()) != -1)
    }
    return array;
  }
  
  get_select_value() {
    let value = document.getElementById("opcoes").nodeValue;
    return value;
  }
}
