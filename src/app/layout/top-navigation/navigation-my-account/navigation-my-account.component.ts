import { Component, OnInit } from '@angular/core';
import {faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons';
import {AuthService} from '../../../auth.service';

@Component({
  selector: 'app-navigation-my-account',
  templateUrl: './navigation-my-account.component.html',
  styleUrls: ['./navigation-my-account.component.scss']
})
export class NavigationMyAccountComponent implements OnInit {

  menuOpen = false;
  menuToggleIcon = faAngleDown;

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  menuToggled() {
    this.menuOpen = !this.menuOpen;

    if (this.menuOpen) {
      this.menuToggleIcon = faAngleUp;
    } else {
      this.menuToggleIcon = faAngleDown;
    }
  }
}
