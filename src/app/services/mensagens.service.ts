import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import {LoginComponent} from '../login/login.component';
import { MuralComponent } from '../mural/mural.component';
import 'rxjs/add/operator/map';
import swal from 'sweetalert';

@Injectable()
export class MensagensService {

  private login: LoginComponent;
  private mural: MuralComponent;

  constructor(private http: Http) { }

  public getMensagens() {
    return this.http.get('http://150.165.85.16:9900/api/msgs')
    .map(response => response.json());
  }

  public enviaMensagem(titulo: string, mensagem: string, autor: string, senha: string) {
    const user = 'hemillainy';
    const body = {
      title: titulo,
      msg: mensagem,
      author: autor,
      credentials: `${user}:${senha}`
    }
    this.http.post('http://150.165.85.16:9900/api/msgs', body)
    .subscribe(response => {
      if (response.status == 200) {
        this.mural.ngOnInit();
      }
    },
    error => {
      const swal = require('sweetalert');
      swal('Senha incorreta!');
    });
  }
}
