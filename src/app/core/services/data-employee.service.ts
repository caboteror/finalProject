import { Employee } from './../models/employee.interface';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class DataEmployeeService {
	isLogged = false;
	employee: Employee;
	error = { code: 1, messaje: 'Usuario o clave invalido' };
	constructor() {}

	setIsLogged(isLogged) {
		// isLogged ? alert('Bienvenido') : alert(this.error.messaje);
		this.isLogged = isLogged;
	}

	setEmployeeLogged(employee: Employee) {
		this.employee = employee;
		this.setIsLogged(true);
	}

	logOut() {
		this.isLogged = false;
		this.employee = undefined;
	}
}
