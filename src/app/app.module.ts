import { MyNavComponent } from './shared/material/my-nav/my-nav.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [ AppComponent ],
	imports: [ BrowserModule, AppRoutingModule, CoreModule, BrowserAnimationsModule, SharedModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
