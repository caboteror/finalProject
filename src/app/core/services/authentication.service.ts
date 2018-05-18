import { User } from './../models/user.interface';
import { DataUserService } from './data-user.service';
import { environment } from './../../../environments/environment';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { Route } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {
	user: User;
	error;
	data$;
	isUserLogged = false;

	constructor(private apiService: ApiService, private dataUserService: DataUserService) {}

	validateAuthentication(user: string, password: string) {
		const cachedData = null;
		this.data$ = this.apiService
			.get('users')
			.pipe(
				map((collection: User[]) => {
					return collection.filter(
						(data) => data.user === user && data.password === password
					);
				})
			)
			.subscribe(
				(data) => {
					data.length
						? this.dataUserService.setUserLogged(data[0])
						: this.dataUserService.setIsLogged(false);
				},
				(err) => {
					this.error = `${environment.comunitacionError}`;
				}
			);
		return this.isUserLogged;
	}

	isLogged() {
		console.log(this.isUserLogged);
		return this.isUserLogged;
	}
}
