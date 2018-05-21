import { DataEmployeeService } from './data-employee.service';
import { Employee } from './../models/employee.interface';
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
	employee: Employee;
	error;
	data$;
	isEmployeeLogged = false;

	constructor(private apiService: ApiService, private dataEmployeeService: DataEmployeeService) {}

	validateAuthentication(username: string, password: string) {
		const cachedData = null;
		this.data$ = this.apiService
			.get('employees')
			.pipe(
				map((collection: Employee[]) => {
					return collection.filter(
						(data) => data.username === username && data.password === password
					);
				})
			)
			.subscribe(
				(data) => {
					data.length
						? this.dataEmployeeService.setEmployeeLogged(data[0])
						: this.dataEmployeeService.setIsLogged(false);
				},
				(err) => {
					this.error = `${environment.comunitacionError}`;
				}
			);
		return this.isEmployeeLogged;
	}

	isLogged() {
		return this.isEmployeeLogged;
	}

	logOut() {
		this.isEmployeeLogged = false;
		this.employee = undefined;
	}
}
