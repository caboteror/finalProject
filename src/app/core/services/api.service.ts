import { catchError } from 'rxjs/operators/catchError';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	constructor(private http: HttpClient) {}

	private formatErrors(error: any) {
		return new ErrorObservable(error.error);
	}

	get(path: string): Observable<any> {
		return this.http.get(`${environment.api_url}${path}`).pipe(catchError(this.formatErrors));
	}

	put(): Observable<any> {}

	post(): Observable<any> {}

	delete(): Observable<any> {}
}
