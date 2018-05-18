import { ProjectService } from './../../core/services/project.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-project-list',
	templateUrl: './project-list.component.html',
	styleUrls: [ './project-list.component.scss' ]
})
export class ProjectListComponent implements OnInit {
	projects$;
	constructor(private projectService: ProjectService) {
		this.projects$ = this.projectService.getProjects();
	}

	ngOnInit() {}
}
