import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public loggedIn: boolean = null;

  private authStateSubscription;

  constructor(public auth: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.authStateSubscription = this.auth.authState$.subscribe(
      authState => this.handleAuthenticationChange(authState)
    );
  }

  ngOnDestroy(): void {
    if (this.authStateSubscription) { this.authStateSubscription.unsubscribe(); }
  }

  async handleAuthenticationChange(authState: boolean): Promise<any> {

    if (authState === null) { return; }

    this.loggedIn = authState;

    console.log('(HomeComponent) this.auth.loggedIn - ' + this.auth.loggedIn);
    if (this.auth.loggedIn) {
      console.log('(HomeComponent) is logged in, redirecting to /menu');

      if (this.authStateSubscription) { this.authStateSubscription.unsubscribe(); }

      const that = this;

      // noinspection JSIgnoredPromiseFromCall
      setTimeout(() => that.router.navigate(['/menu']), 50);
    } else {
      console.log('(HomeComponent) is not logged in, staying on current page');
    }
  }
}
