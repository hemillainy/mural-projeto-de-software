import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ControllerService {
  private _mensagens = 'http://150.165.85.16:9900/api/msgs';
  private _frontends = 'http://150.165.85.16:9900/api/frontends';
  private _frontend = '';

  constructor(private _http: Http) { }

  public getMensagens() {
    return this._http.get('http://150.165.85.16:9900/api/msgs')
    .subscribe((data: Response) =>
    const msg = data.json();
    });
  }
}
