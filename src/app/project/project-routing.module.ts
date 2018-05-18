import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';

const routes: Routes = [
	{
		path: '',
		component: ProjectListComponent,
		// canActivate: [ LoginGuard ]
		children: [
			{
				path: 'projectDetail',
				component: ProjectListComponent
				// canActivate: [ LoginGuard ]
			}
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class ProjectRoutingModule {}
