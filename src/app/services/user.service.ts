import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {User} from '../models/user';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  // Base url
  baseurl = 'http://localhost:8080/sharely';

  constructor(private http: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // POST
  Login(data): Observable<User> {
    return this.http.post<User>(this.baseurl + '/me/login', JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  // GET
  GetInfos(id): Observable<User> {
    return this.http.get<User>(this.baseurl + '/me/infos/'+id)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  // GET
  Logout(): Observable<User> {
    return this.http.get<User>(this.baseurl + '/me/logout')
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }


}
