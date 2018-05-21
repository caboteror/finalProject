import { Employee } from './../../core/models/employee.interface';
import { ProjectService } from './../../core/services/project.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProjectDetailComponent } from '../project-detail/project-detail.component';

@Component({
	selector: 'app-project-list',
	templateUrl: './project-list.component.html',
	styleUrls: [ './project-list.component.scss' ]
})
export class ProjectListComponent implements OnInit {
	displayedColumns = [ 'select', 'id', 'name', 'teamSize', 'clientName', 'controls' ];
	projects$;
	exapndedElement: Employee;
	constructor(private projectService: ProjectService, public dialog: MatDialog) {
		this.projects$ = this.projectService.getProjects();
	}

	updateData() {
		this.projects$ = this.projectService.getProjects();
	}

	editItem(project) {
		this.projectService.updateProject(project);
	}

	openDialog(): void {
		const dialogRef = this.dialog.open(ProjectDetailComponent, {
			width: '250px',
			data: {}
		});

		dialogRef.afterClosed().subscribe((result) => {
			this.updateData();
		});
	}

	deleteProject(project) {
		this.projectService.deleteProject(project);
		this.updateData();
	}

	ngOnInit() {}
}
