import { AuthenticationService } from './services/authentication.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
	imports: [ CommonModule ],
	declarations: [],
	providers: [ AuthenticationService ]
})
export class CoreModule {}
