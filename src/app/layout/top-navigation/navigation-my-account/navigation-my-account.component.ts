import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth.service';

@Component({
  selector: 'app-navigation-my-account',
  templateUrl: './navigation-my-account.component.html',
  styleUrls: ['./navigation-my-account.component.scss']
})
export class NavigationMyAccountComponent implements OnInit {

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
