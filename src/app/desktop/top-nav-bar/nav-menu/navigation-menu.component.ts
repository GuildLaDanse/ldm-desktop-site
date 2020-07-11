import {Component, OnDestroy, OnInit} from '@angular/core';

import {AuthService} from '../../../services/auth/auth.service';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit, OnDestroy {

  private authStateSubscription;

  public username = null;

  constructor(public auth: AuthService) {
  }

  ngOnInit(): void {
    this.auth.authState$.subscribe(
      authState => this.updateMenu(authState)
    );
  }

  ngOnDestroy(): void {
    this.authStateSubscription.unsubscribe();
  }

  updateMenu(isAuthenticated: boolean) {
    if (isAuthenticated) {
      this.auth.getUser$().subscribe(
        result => this.username = result.nickname
      );
    }
  }
}
