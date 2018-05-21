import { AuthenticationService } from './../../core/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;

	constructor(private fb: FormBuilder, private authenticationService: AuthenticationService) {
		// use FormBuilder to create a form group
		this.loginForm = this.fb.group({
			username: [ '', Validators.required ],
			password: [ '', Validators.required ]
		});
	}

	validateAuthentication() {
		this.authenticationService.validateAuthentication(
			this.loginForm.get('username').value,
			this.loginForm.get('password').value
		);
	}

	logOut() {
		this.authenticationService.logOut();
	}

	ngOnInit() {}
}
