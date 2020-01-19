import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {catchError, map, retry} from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Base url
  baseurl = 'http://localhost:8080/sharely';
  errorData: {};
  redirectUrl: string;

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }


  // POST
  login(data) {
    return this.http.post<any>(this.baseurl + '/me/login', JSON.stringify(data))
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        sessionStorage.setItem('currentUser', JSON.stringify(data));
        sessionStorage.setItem('isLoggedIn', 'true');

        this.currentUserSubject.next(user);
        return data;
      }));
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  isLoggedIn() {
    if (sessionStorage.getItem('currentUser')) {
      return true;
    }
    return false;
  }

  logout() {
    sessionStorage.removeItem('currentUser');
    sessionStorage.setItem('isLoggedIn', 'false');
    this.currentUserSubject.next(null);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {

      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {

      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    // return an observable with a user-facing error message
    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }
}
