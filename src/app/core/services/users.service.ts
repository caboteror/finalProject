import { User } from './../models/user.interface';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class UsersService {
	constructor(private apiService: ApiService) {}

	getUsers(): Observable<User[]> {
		return this.apiService.get('users');
	}
}
