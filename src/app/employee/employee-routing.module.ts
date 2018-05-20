import { EmployeesListComponent } from './employees-list/employees-list.component';
import { LoginGuard } from './../core/services/login-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

const routes: Routes = [
	{
		path: '',
		component: EmployeesListComponent,
		// canActivate: [ LoginGuard ]
		children: [
			{
				path: 'employeeDetail',
				component: EmployeeDetailComponent
				// canActivate: [ LoginGuard ]
			}
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class EmployeeRoutingModule {}
