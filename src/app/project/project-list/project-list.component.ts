import { ProjectService } from './../../core/services/project.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-project-list',
	templateUrl: './project-list.component.html',
	styleUrls: [ './project-list.component.scss' ]
})
export class ProjectListComponent implements OnInit {
	displayedColumns = [ 'id', 'name', 'teamSize', 'clientName' ];
	projects$;
	constructor(private projectService: ProjectService) {
		this.projects$ = this.projectService.getProjects();
	}

	updateData() {
		this.projects$ = this.projectService.getProjects();
	}

	ngOnInit() {}
}
