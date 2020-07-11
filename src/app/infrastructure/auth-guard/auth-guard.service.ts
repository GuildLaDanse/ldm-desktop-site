import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';
import {Logger} from '../logger';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    const resolvedUrlForRoute = this.getResolvedUrl(route);

    Logger.debug('AuthGuardService', 'canActivate', 'verifying if the following route can be activated: ' + resolvedUrlForRoute);

    if (!this.auth.loggedIn) {
      Logger.debug('AuthGuardService', 'canActivate', 'not logged in, redirecting to ' + resolvedUrlForRoute);
      this.auth.login(resolvedUrlForRoute);
      return false;
    }

    Logger.debug('AuthGuardService', 'canActivate', 'logged in, route can activate ' + resolvedUrlForRoute);

    return true;
  }

  getResolvedUrl(route: ActivatedRouteSnapshot): string {
    return route.pathFromRoot
      .map(v => v.url.map(segment => segment.toString()).join('/'))
      .join('/');
  }
}
