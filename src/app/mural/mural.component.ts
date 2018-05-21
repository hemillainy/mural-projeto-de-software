import { Component, OnInit } from '@angular/core';
import { ControllerService } from '../services/controller.service';

@Component({
  selector: 'app-mural',
  templateUrl: './mural.component.html',
  styleUrls: ['./mural.component.css']
})
export class MuralComponent implements OnInit {

  private _mensagens = [];
  private _controller: ControllerService;

  title = this._controller.getMensagens();
  constructor() {}

  ngOnInit() {
  }

  public getMensagens() {
    return this._controller.getMensagens();
    //return this._mensagens;
  }
}
