import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Employee } from '../../core/models/employee.interface';
import { EmployeesService } from './../../core/services/employees.service';

@Component({
	selector: 'app-employee-detail',
	templateUrl: './employee-detail.component.html',
	styleUrls: [ './employee-detail.component.scss' ]
})
export class EmployeeDetailComponent implements OnInit {
	employeeForm: FormGroup;
	employee: Employee;
	constructor(
		private fb: FormBuilder,
		private employeesService: EmployeesService,
		public dialogRef: MatDialogRef<EmployeeDetailComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {
		// use FormBuilder to create a form group
		this.employeeForm = this.fb.group({
			name: [ '', Validators.required ],
			company: [ '', Validators.required ],
			age: [ '', Validators.required ],
			birthday: [ '', Validators.required ],
			favoriteColor: [ '', Validators.required ],
			projectId: [ '', Validators.required ],
			username: [ '', Validators.required ],
			password: [ '', Validators.required ],
			roll: [ '', Validators.required ]
		});
	}

	createEmployee() {
		this.employeesService.createEmployee(this.employeeForm.value);
		this.close();
	}
	onNoClick(): void {
		this.dialogRef.close();
	}

	public close() {
		this.dialogRef.close();
	}

	ngOnInit() {}
}
