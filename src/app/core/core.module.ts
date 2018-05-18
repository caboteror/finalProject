import { DataMockService } from './../data-mock.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginGuard } from './services/login-guard.service';
import { AuthenticationService } from './services/authentication.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		HttpClientInMemoryWebApiModule.forRoot(DataMockService)
	],
	declarations: [],
	exports: [ HttpClientModule ],
	providers: [ AuthenticationService, LoginGuard ]
})
export class CoreModule {}
