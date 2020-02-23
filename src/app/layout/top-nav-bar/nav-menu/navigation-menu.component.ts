import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../services/auth/auth.service';
import {faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {

  menuOpen = false;
  menuToggleIcon = faAngleDown;

  constructor() { }

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
