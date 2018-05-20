import { CoreModule } from './../core/core.module';
import { SharedModule } from './../shared/shared.module';
import { ProjectRoutingModule } from './project-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

@NgModule({
	imports: [ CommonModule, ProjectRoutingModule, SharedModule, CoreModule ],
	declarations: [ ProjectListComponent, ProjectDetailComponent ]
})
export class ProjectModule {}
