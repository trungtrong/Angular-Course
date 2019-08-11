import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url = '/assets/data/employees.json';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<IEmployee[]> {
    // returns an Observale of IEmployee
    return this.http.get<IEmployee[]>(this._url)
                    // error occurs
                    .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    // return an observale with a user-facing error message
    return throwError(error.message || 'Service Error');
  }
}
