import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Route } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {
	userOk = 'cbotero';
	passwordOk = 'caboteror';
	loginOk = false;

	constructor(private http: HttpClient) {}

	getResource<T>(url: string, property: string[]): Observable<T[]> {
		return this.http.get<T[]>(url);
	}
	isLogged() {
		console.log(this.loginOk);
		return this.loginOk;
	}

	validateUserAndPassword(user: string, password: string) {
		this.loginOk = user === this.userOk && password === this.passwordOk;
	}
}
