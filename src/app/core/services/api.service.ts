import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	constructor(private http: HttpClient) {}

	get(path: string): Observable<any> {
		return this.http.get(`${environment.api_url}${path}`);
	}

	put(path: string, body: Object = {}): Observable<any> {
		return this.http.put(`${environment.api_url}${path}`, body);
	}

	post(path: string, body: Object = {}): Observable<any> {
		return this.http.post(`${environment.api_url}${path}`, body);
	}

	delete(path): Observable<any> {
		return this.http.delete(`${environment.api_url}${path}`);
	}
}
