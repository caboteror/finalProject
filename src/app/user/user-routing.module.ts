import { UsersListComponent } from './users-list/users-list.component';
import { LoginGuard } from './../core/services/login-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
	{
		path: '',
		component: UsersListComponent,
		// canActivate: [ LoginGuard ]
		children: [
			{
				path: 'userDetail',
				component: UserDetailComponent
				// canActivate: [ LoginGuard ]
			}
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class UserRoutingModule {}
