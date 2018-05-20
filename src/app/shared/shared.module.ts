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
	MatFormField,
	MatTableModule,
	MatPaginatorModule,
	MatSortModule,
	MatInputModule
} from '@angular/material';
import { MyTableComponent } from './material/my-table/my-table.component';

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
		MatListModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		MatInputModule
	],
	declarations: [ MyNavComponent, MyTableComponent ],
	exports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule,
		MyNavComponent,
		MatInputModule,
		MyTableComponent
	]
})
export class SharedModule {}
