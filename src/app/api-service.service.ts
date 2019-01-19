import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ApiServiceService {

	baseUrl = "http://laravel-api.testing/api/";
	token: any;

	constructor(private http: HttpClient) {}


	postData(url, data) {
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type':  'application/json',
				'Access-Control-Allow-Origin': '*',
				'Authorization': 'Bearer '+this.token
			})
		};
		// return this.http.post(this.baseUrl+url+'/', data, httpOptions);
		//return this.http.post(this.baseUrl+url+'/', data);

        this.http.post(this.baseUrl + url, data).subscribe(res => {
        	console.log(res);
        }, err => {
            console.log('Error occured');
        });		
	}

	getToken(token) {
		this.token = token;
	}

	sendToken() {
		return this.token;
	}	    

}
