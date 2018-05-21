import { Project } from './../../../core/models/project.interface';
import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { MyTableDataSource } from './my-table-datasource';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
	selector: 'my-table',
	templateUrl: './my-table.component.html',
	styleUrls: [ './my-table.component.css' ]
})
export class MyTableComponent implements OnInit {
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	dataSource: MyTableDataSource;
	@Input() displayedColumns;
	@Input() data;
	@Output() addItem = new EventEmitter();
	@Output() editItem = new EventEmitter();
	@Output() deleteItem = new EventEmitter();
	selection = new SelectionModel<Element>(true, []);

	/** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */

	/** Whether the number of selected elements matches the total number of rows. */
	isAllSelected() {
		const numSelected = this.selection.selected.length;
		const numRows = this.dataSource.data.length;
		return numSelected === numRows;
	}

	onAddItem() {
		this.addItem.emit();
	}

	edit(row: any, event, colum: string) {
		row[colum] = event.target.value;
	}

	onEditItem(row: any) {
		row.edit = !row.edit;
		if (!row.edit) {
			this.editItem.emit(row);
		}
	}

	onDeleteItem(row) {
		this.deleteItem.emit(row);
	}

	/** Selects all rows if they are not all selected; otherwise clear selection. */
	masterToggle() {
		this.isAllSelected()
			? this.selection.clear()
			: this.dataSource.data.forEach((row) => this.selection.select(row));
	}

	ngOnInit() {
		this.dataSource = new MyTableDataSource(this.paginator, this.sort, this.data);
	}
}
