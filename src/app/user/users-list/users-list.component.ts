import { UsersService } from './../../core/services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-users-list',
	templateUrl: './users-list.component.html',
	styleUrls: [ './users-list.component.scss' ]
})
export class UsersListComponent implements OnInit {
	users$;
	constructor(private usersService: UsersService) {
		this.users$ = this.usersService.getUsers();
	}

	ngOnInit() {}
}
