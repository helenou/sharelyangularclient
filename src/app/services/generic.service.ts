import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Generic} from '../models/generic';

@Injectable({
  providedIn: 'root'
})

export class GenericService<T extends Generic> {
  errorData: {};

  constructor(
    private httpClient: HttpClient,
    private url: string,
    private endpoint: string) {}

  public create(item: T): Observable<T> {
    // @ts-ignore
    return this.httpClient
      .post<T>(`${this.url}/${this.endpoint}/new`, JSON.stringify(item))
      .pipe(map((data: any) => JSON.parse(data) as T),
        catchError(err => this.handleError(err)));
  }

  public update(item: T): Observable<T> {
    return this.httpClient
      .put<T>(`${this.url}/${this.endpoint}/${item.id}`, JSON.stringify(item))
      .pipe(map((data: any) => JSON.parse(data) as T));
  }

  read(id: number): Observable<T> {
    return this.httpClient
      .get(`${this.url}/${this.endpoint}/${id}`)
      .pipe(map((res: any) => {
        return JSON.parse(res.data);
      }));
  }

  readAll() {
    return this.httpClient
      .get(`${this.url}/${this.endpoint}/`);
  }

  delete(id: number) {
    return this.httpClient
      .delete(`${this.url}/${this.endpoint}/${id}`);
  }

  private convertData(data: any): T[] {
    return data.map(item => JSON.stringify(item));
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
