import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isAuthenticated: boolean = null;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {

    this.auth.isAuthenticated$.subscribe(
      res => {
        if (res !== this.isAuthenticated) {
          this.isAuthenticated = res as boolean;
          this.redirectOnAuthenticationChange();
        }
      }
    );
  }

  redirectOnAuthenticationChange(): void {
    if (this.isAuthenticated) {
      console.log('is logged in');
      // noinspection JSIgnoredPromiseFromCall
      this.router.navigate(['./menu']);
    } else {
      console.log('is not logged in');
      // noinspection JSIgnoredPromiseFromCall
      this.router.navigate(['./welcome']);
    }
  }
}
