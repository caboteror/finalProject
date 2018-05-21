import { DataEmployeeService } from './../../core/services/data-employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
	constructor(private dataEmployeeService: DataEmployeeService) {}

	ngOnInit() {}

	logOut() {
		this.dataEmployeeService.logOut();
	}
}
