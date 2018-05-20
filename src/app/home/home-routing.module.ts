import { LoginGuard } from './../core/services/login-guard.service';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		canActivate: [ LoginGuard ],

		children: [
			{
				path: 'employees',
				loadChildren: '../employee/employee.module#EmployeeModule'
			},
			{
				path: 'projects',
				loadChildren: '../project/project.module#ProjectModule'
			}
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class HomeRoutingModule {}
