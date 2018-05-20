import { CoreModule } from './../core/core.module';
import { EmployeeRoutingModule } from './employee-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	imports: [ CommonModule, EmployeeRoutingModule, CoreModule, SharedModule ],
	declarations: [ EmployeesListComponent, EmployeeDetailComponent ]
})
export class EmployeeModule {}
