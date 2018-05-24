import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  
  frontends = this.getFronteds();

  public getFronteds(){
    return this.http.get('http://150.165.85.16:9900/api/frontends')
    .map(frontend => frontend.json());
  }

  public setExibir(login, mural) {

  }
}
