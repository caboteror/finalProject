import { CoreModule } from './../core/core.module';
import { UserRoutingModule } from './user-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
	imports: [ CommonModule, UserRoutingModule, CoreModule ],
	declarations: [ UsersListComponent, UserDetailComponent ]
})
export class UserModule {}
