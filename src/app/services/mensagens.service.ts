import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class MensagensService {

  constructor(private http: Http) { }

  private frontends = [];

  public getMensagens() {
    return this.http.get('http://150.165.85.16:9900/api/msgs')
    .map(response => response.json());
  }
}
