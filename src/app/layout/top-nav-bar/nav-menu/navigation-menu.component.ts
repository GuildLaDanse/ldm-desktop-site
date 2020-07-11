import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {

  username = '<test>';

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(
      res => this.updateMenu(res as boolean)
    );
  }

  updateMenu(isAuthenticated: boolean) {
    if (isAuthenticated) {
      this.auth.getUser$().subscribe(
        result => this.username = result.nickname
      );
    }
  }
}
