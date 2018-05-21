import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
	{
		path: '',
		loadChildren: './authentication/authentication.module#AuthenticationModule'
	},
	{
		path: 'home',
		loadChildren: './home/home.module#HomeModule'
	},
	{ path: '404', component: NotFoundComponent },

	{ path: '**', redirectTo: '/404' }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ],
	declarations: []
})
export class AppRoutingModule {}
