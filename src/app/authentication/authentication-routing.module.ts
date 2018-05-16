import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: LoginComponent
		// canActivate: [NoAuthGuard]
	}
]; /*,
  {
    path: 'register',
    component: AuthComponent,
    canActivate: [NoAuthGuard]
  }
];*/

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class AuthenticationRoutingModule {}