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
    this.mensagensService.msgCreated
    .subscribe(emit => {
      this.attMsgs()
    });
    this.mensagensService.getMensagens()
    .subscribe(msgs => {
      this.mensagensService.setArrayMsgs(msgs);
      this.attMsgs();
    });
  }

  private attMsgs() {
    this.mensagensService.ordenaMensagens();
    this.mensagens = this.mensagensService.mensagens;
  }
    /*
  *  ngOnInit() {
    this.mensagensService.msgCreated
    .subscribe(this.attMsgs());
    this.attMsgs();
  }

  private attMsgs() {
    this.mensagensService.getMensagens()
    .subscribe(msgs => {
      this.mensagensService.setArrayMsgs(msgs);
      this.mensagensService.ordenaMensagens();
      this.mensagens = this.mensagensService.mensagens;
    });
  }
  */
  updateMural() {
    this.mensagensService.ordenaMensagens();
    this.mensagens = this.mensagensService.mensagens;
  }

  getMensagens(){
    return this.mensagens;
  }

  public setExibirMural() {
    this.exibirMural = !this.exibirMural;
  }
  
}
