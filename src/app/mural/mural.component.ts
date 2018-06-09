import { MensagensService } from './../services/mensagens.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mural',
  templateUrl: './mural.component.html',
  styleUrls: ['./mural.component.css']
})
export class MuralComponent implements OnInit {

  exibirMural = true;
  mensagens: Object[] = [];
  constructor(private mensagensService: MensagensService) {}

  ngOnInit() {
    this.mensagensService.getMensagens()
    .subscribe(msgs => {
      this.mensagensService.setArrayMsgs(msgs);
      this.mensagensService.ordenaMensagens();
      this.mensagens = this.mensagensService.mensagens;
    });
  }

  getMensagens(){
    return this.mensagens;
  }

  public setExibirMural() {
    this.exibirMural = !this.exibirMural;
  }
  
}
