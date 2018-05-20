import { EmployeesService } from './../../core/services/employees.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-employees-list',
	templateUrl: './employees-list.component.html',
	styleUrls: [ './employees-list.component.scss' ]
})
export class EmployeesListComponent implements OnInit {
	displayedColumns = [ 'id', 'name', 'age', 'company', 'projectId', 'favorite_color' ];

	employees$;
	constructor(private employeesService: EmployeesService) {
		this.employees$ = this.employeesService.getEmployees();
	}

	ngOnInit() {}
}
