import { User } from './../models/user.interface';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class DataUserService {
	isLogged = false;
	user: User;
	error = { code: 1, messaje: 'Usuario o clave invalido' };
	constructor() {}

	setIsLogged(isLogged) {
		// isLogged ? alert('Bienvenido') : alert(this.error.messaje);
		this.isLogged = isLogged;
	}

	setUserLogged(user: User) {
		this.user = user;
		this.setIsLogged(true);
	}
}
