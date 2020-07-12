import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthService} from '../services/auth/auth.service';
import {Observable, throwError} from 'rxjs';
import {catchError, mergeMap} from 'rxjs/operators';

import {environment} from '../../environments/environment';
import {LoggingFunctions} from './logging.functions';

@Injectable({
  providedIn: 'root'
})
export class Auth0HttpInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) {
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    LoggingFunctions.debug('Auth0HttpInterceptor', 'intercept', 'intercepting request');
    LoggingFunctions.debug('Auth0HttpInterceptor', 'intercept', req);

    if (!req.url.startsWith(environment.api.baseUrl)) {
      LoggingFunctions.debug('Auth0HttpInterceptor', 'intercept', 'request does not match REST API baseUrl, skipping');
      return next.handle(req);
    }

    LoggingFunctions.debug('Auth0HttpInterceptor', 'intercept', 'request matches REST API baseUrl');

    const auth = this.injector.get(AuthService);

    return auth.getTokenSilently$().pipe(
      mergeMap(token => {
        const tokenReq = req.clone({
          setHeaders: {Authorization: `Bearer ${token}`}
        });
        return next.handle(tokenReq);
      }),
      catchError(err => throwError(err))
    );
  }
}
