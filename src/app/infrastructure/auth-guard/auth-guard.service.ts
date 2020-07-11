import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.auth.loggedIn) {
      console.log('(AuthGuardService) not logged in, redirecting to ' + route.outlet);
      this.auth.login(route.outlet);
      return false;
    }

    console.log('(AuthGuardService) logged in, route can activate ' + route.toString());
    return true;
  }
}
