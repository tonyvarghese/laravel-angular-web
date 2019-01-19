import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './../api-service.service';

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

	username: any;
	password: any;
	c_password: any;
	auth_token: any;
	email: any;	

	constructor(private apiService: ApiServiceService) { }

	ngOnInit() {
	}

	login() {
		let data = {
			"password" : this.password,
			"email" : this.email
		}
		this.apiService.postData("login", data)
		.subscribe(
			result => {
				this.auth_token = result['success']['token'];
				localStorage.setItem("auth_token", this.auth_token);
				this.apiService.getToken(this.auth_token);
			},
			error => {
				console.error("error creating subscription");
			}
			);
	}
}
