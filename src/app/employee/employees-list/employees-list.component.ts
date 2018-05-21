import { Employee } from './../../core/models/employee.interface';
import { EmployeeDetailComponent } from './../employee-detail/employee-detail.component';
import { MatDialog } from '@angular/material';
import { EmployeesService } from './../../core/services/employees.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-employees-list',
	templateUrl: './employees-list.component.html',
	styleUrls: [ './employees-list.component.scss' ]
})
export class EmployeesListComponent implements OnInit {
	displayedColumns = [
		'id',
		'name',
		'company',
		'age',
		'birthday',
		'favoriteColor',
		'projectId',
		'username',
		'password',
		'roll',
		'controls'
	];

	employees$;
	constructor(private employeesService: EmployeesService, public dialog: MatDialog) {
		this.employees$ = this.employeesService.getEmployees();
	}

	openDialog(): void {
		const dialogRef = this.dialog.open(EmployeeDetailComponent, {
			width: '250px',
			data: {}
		});

		dialogRef.afterClosed().subscribe((result) => {
			this.updateData();
		});
	}

	updateData() {
		this.employees$ = this.employeesService.getEmployees();
	}

	createEmployee(employee) {
		this.employeesService.updateEmployee(employee);
	}

	deleteEmployee(employee) {
		this.employeesService.deleteEmployee(employee);
		this.updateData();
	}

	ngOnInit() {}
}
