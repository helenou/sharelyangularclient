import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders
} from '@angular/common/http';

import { Observable } from 'rxjs';
import {AuthService} from '../services/auth.service';

/** Inject With Credentials into the request */
@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        withCredentials: true,
        reportProgress: true,
      });

    return next.handle(request);
  }

}
