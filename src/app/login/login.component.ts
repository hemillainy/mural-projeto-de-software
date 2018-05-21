import { Component, OnInit } from '@angular/core';
import { ControllerService } from '../services/controller.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private controller: ControllerService;
  private exibir = false;
  constructor() { }

  ngOnInit() {
  }

  public setExibir(): void {
    this.exibir = !this.exibir;
  }

  public getExibir(): boolean {
    return this.exibir;
  }

}
