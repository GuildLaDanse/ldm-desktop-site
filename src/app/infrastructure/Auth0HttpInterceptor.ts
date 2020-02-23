import {Injectable, Injector} from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import {AuthService} from '../services/auth/auth.service';
import {Observable, throwError} from 'rxjs';
import {catchError, mergeMap} from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Auth0HttpInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    console.log('intercepting request');
    console.log(req);

    if (!req.url.startsWith(environment.api.baseUrl)) {
      console.log('request does not match REST API baseUrl, skipping');
      return next.handle(req);
    }
    console.log('request matches REST API baseUrl');

    const auth = this.injector.get(AuthService);

    return auth.getTokenSilently$().pipe(
      mergeMap(token => {
        const tokenReq = req.clone({
          setHeaders: { Authorization: `Bearer ${token}` }
        });
        return next.handle(tokenReq);
      }),
      catchError(err => throwError(err))
    );
  }
}
