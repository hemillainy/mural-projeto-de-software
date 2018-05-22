import { MensagensService } from './../services/mensagens.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mural',
  templateUrl: './mural.component.html',
  styleUrls: ['./mural.component.css']
})
export class MuralComponent implements OnInit {

  public mensagens = [];

  constructor(private mensagensService: MensagensService) {}

  ngOnInit() {
    this.mensagensService.getMensagens().subscribe(msgs => {
      this.mensagens = msgs;
    });
  }
}
