import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from './../shared/shared.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
	imports: [ SharedModule, AuthenticationRoutingModule ],
	declarations: [ LoginComponent ],
	providers: []
})
export class AuthenticationModule {}
