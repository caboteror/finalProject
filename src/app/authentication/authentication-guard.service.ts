import { AuthenticationService } from './../core/services/authentication.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanLoad } from '@angular/router';

@Injectable()
export class AuthenticationGuardService implements CanLoad {
	constructor(private authenticationService: AuthenticationService) {}

	canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
		const isAuthenticated = this.authenticationService.isLogged();
		console.log(isAuthenticated);
		return isAuthenticated;
	}
}
