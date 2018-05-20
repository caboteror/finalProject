import { DataEmployeeService } from './data-employee.service';
import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {
	constructor(
		private authenticationService: AuthenticationService,
		private dataEmployeeService: DataEmployeeService
	) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		return this.dataEmployeeService.isLogged;
	}
}
