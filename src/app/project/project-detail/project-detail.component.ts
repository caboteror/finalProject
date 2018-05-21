import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Project } from '../../core/models/project.interface';
import { ProjectService } from '../../core/services/project.service';
import { ProjectListComponent } from '../project-list/project-list.component';

@Component({
	selector: 'app-project-detail',
	templateUrl: './project-detail.component.html',
	styleUrls: [ './project-detail.component.scss' ]
})
export class ProjectDetailComponent implements OnInit {
	projectForm: FormGroup;
	project: Project;
	employeeName: string;
	constructor(
		private fb: FormBuilder,
		private projectService: ProjectService,
		public dialogRef: MatDialogRef<ProjectDetailComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {
		// use FormBuilder to create a form group
		this.projectForm = this.fb.group({
			// id: [ '', Validators.required ],
			name: [ '', Validators.required ],
			teamSize: [ '', Validators.required ],
			clientName: [ '', Validators.required ]
		});
	}
	createProject() {
		this.projectService.updateProject(this.projectForm.value);
		this.close();
	}
	onNoClick(): void {
		this.dialogRef.close();
	}

	public close() {
		this.dialogRef.close();
	}
	ngOnInit() {}
}
