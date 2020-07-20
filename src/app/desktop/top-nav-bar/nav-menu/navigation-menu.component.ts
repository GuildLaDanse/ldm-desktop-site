import {Component, OnDestroy, OnInit} from '@angular/core';

import {AuthService} from '../../../services/auth/auth.service';
import {ThemeService} from '../../../services/theme/theme.service';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit, OnDestroy {

  private authStateSubscription;

  public username = null;

  constructor(public auth: AuthService, public themeService: ThemeService) {
  }

  ngOnInit(): void {
    this.auth.authState$.subscribe(
      authState => this.updateMenu(authState)
    );
  }

  ngOnDestroy(): void {
    this.authStateSubscription.unsubscribe();
  }

  logout(e) {
    e.preventDefault();

    this.auth.logout();
  }

  updateMenu(isAuthenticated: boolean) {
    if (isAuthenticated) {
      this.auth.getUser$().subscribe(
        result => this.username = result.nickname
      );
    }
  }
}
