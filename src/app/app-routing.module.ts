import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: './authentication/authentication.module#AuthenticationModule'
	},
	{
		path: 'home',
		loadChildren: './home/home.module#HomeModule'
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ],
	declarations: []
})
export class AppRoutingModule {}
