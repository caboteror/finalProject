import { CoreModule } from './../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { EmployeeRoutingModule } from './employee-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

@NgModule({
	imports: [ CommonModule, EmployeeRoutingModule, SharedModule, CoreModule ],
	declarations: [ EmployeesListComponent, EmployeeDetailComponent ],
	entryComponents: [ EmployeeDetailComponent ]
})
export class EmployeeModule {}
