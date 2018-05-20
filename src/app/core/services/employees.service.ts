import { Employee } from './../models/employee.interface';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class EmployeesService {
	constructor(private apiService: ApiService) {}

	getEmployees(): Observable<Employee[]> {
		return this.apiService.get('employees');
	}
}
