import { Component, Output, EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Component({
	selector: 'my-nav',
	templateUrl: './my-nav.component.html',
	styleUrls: [ './my-nav.component.css' ]
})
export class MyNavComponent {
	@Output() logOut = new EventEmitter();
	isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
	constructor(private breakpointObserver: BreakpointObserver) {}

	onLogOut() {
		this.logOut.emit();
	}
}
