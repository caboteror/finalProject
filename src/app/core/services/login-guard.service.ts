import { DataUserService } from './data-user.service';
import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {
	constructor(
		private authenticationService: AuthenticationService,
		private dataUserService: DataUserService
	) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		return this.dataUserService.isLogged;
	}
}
