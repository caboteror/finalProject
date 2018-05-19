import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	imports: [ CommonModule, HomeRoutingModule, SharedModule ],
	declarations: [ HomeComponent ]
})
export class HomeModule {}
