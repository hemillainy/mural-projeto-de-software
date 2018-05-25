import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(private http: Http, private router: Router) { }
  
  private autenticado: boolean;

  public login(frontend: string){
    return this.http.get('http://150.165.85.16:9900/api/frontends')
    .map(frontend => frontend.json())
    .subscribe(frontends => {
      if(frontends.indexOf(frontend) != -1){
        this.autenticado = true;
        this.router.navigate(['/mural']);
      } else {
        this.autenticado = false;
      }
    });
  }

  public getAutenticado(): boolean {
    return this.autenticado;
  }
}
