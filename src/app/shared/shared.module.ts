import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MyNavComponent } from './material/my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
	MatToolbarModule,
	MatButtonModule,
	MatSidenavModule,
	MatIconModule,
	MatListModule,
	MatFormField
} from '@angular/material';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule,
		LayoutModule,
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule
	],
	declarations: [ MyNavComponent ],
	exports: [ CommonModule, FormsModule, ReactiveFormsModule, RouterModule, MyNavComponent ]
})
export class SharedModule {}
