import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable()
export class AuthGuardService implements CanActivate{

	constructor(
		private router: Router,
		private loginService: LoginService
	) { }

	public canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> | boolean {
		if (this.loginService.getAutenticado()) {
			return true;
		}
		this.router.navigate(['/login']);
		return false;
	}
}
