import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: './authentication/authentication.module#AuthenticationModule'
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) ],
	exports: [ RouterModule ],
	declarations: []
})
export class AppRoutingModule {}
