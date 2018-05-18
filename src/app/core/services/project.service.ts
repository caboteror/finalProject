import { Project } from './../models/project.interface';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ProjectService {
	constructor(private apiService: ApiService) {}

	getProjects(): Observable<Project[]> {
		return this.apiService.get('projects');
	}
}
