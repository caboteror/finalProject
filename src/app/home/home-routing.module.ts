import { LoginGuard } from './../core/services/login-guard.service';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		canActivate: [ LoginGuard ]
	},
	{
		path: 'users',
		loadChildren: '../user/user.module#UserModule'
	},
	{
		path: 'projects',
		loadChildren: '../project/project.module#ProjectModule'
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class HomeRoutingModule {}
