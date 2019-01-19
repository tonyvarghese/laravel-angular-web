import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './../api-service.service';
import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

	registerForm: FormGroup;

	name: any;
	password: any;
	c_password: any;
	auth_token: any;
	email: any;	

	constructor(private apiService: ApiServiceService) { }


  ngOnInit() {
    this.registerForm = new FormGroup({
        'name': new FormControl(),
        'email': new FormControl(),
        'password': new FormControl(),
        'confirm-password': new FormControl()
    });  	
  }

	register(registerForm: FormGroup) {
		// let data = {
		// 	"password" : this.password,
		// 	"email" : this.email,
		// 	"name" : this.name
		// }
		this.apiService.postData("register", registerForm.value)
		.subscribe(
			result => {
				console.log(result);
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
