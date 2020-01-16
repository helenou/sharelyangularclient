import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Generic} from '../models/generic';

@Injectable({
  providedIn: 'root'
})

export class GenericService<T extends Generic> {

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    withCredentials: true
  };

  constructor(
    private httpClient: HttpClient,
    private url: string,
    private endpoint: string) {}

  public create(item: T): Observable<T> {
    // @ts-ignore
    return this.httpClient
      .post<T>(`${this.url}/${this.endpoint}/new`, JSON.stringify(item), this.httpOptions)
      .pipe(map((data: any) => JSON.parse(data) as T));
  }

  public update(item: T): Observable<T> {
    return this.httpClient
      .put<T>(`${this.url}/${this.endpoint}/${item.id}`, JSON.stringify(item), this.httpOptions)
      .pipe(map((data: any) => JSON.parse(data) as T));
  }

  read(id: number): Observable<T> {
    return this.httpClient
      .get(`${this.url}/${this.endpoint}/${id}`)
      .pipe(map((data: any) => JSON.parse(data) as T));
  }

  delete(id: number) {
    return this.httpClient
      .delete(`${this.url}/${this.endpoint}/${id}`);
  }

  private convertData(data: any): T[] {
    return data.map(item => JSON.stringify(item));
  }
}
