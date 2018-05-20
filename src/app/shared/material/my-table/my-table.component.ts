import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { MyTableDataSource } from './my-table-datasource';

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

	/** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */

	ngOnInit() {
		this.dataSource = new MyTableDataSource(this.paginator, this.sort, this.data);
	}
}
