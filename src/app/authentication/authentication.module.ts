import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
	imports: [ SharedModule, CoreModule, AuthenticationRoutingModule ],
	declarations: [ LoginComponent ],
	providers: []
})
export class AuthenticationModule {}
