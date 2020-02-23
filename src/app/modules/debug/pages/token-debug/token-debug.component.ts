import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-token-debug',
  templateUrl: './token-debug.component.html',
  styleUrls: ['./token-debug.component.scss']
})
export class TokenDebugComponent implements OnInit {

  public isAuthenticated = false;
  public userProfile = null;
  public auth0Client = null;

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(
      res => {
        this.isAuthenticated = res as boolean;
        this.loadTokenInformation();
      }
    );
  }

  loadTokenInformation(): void {
    this.auth.userProfile$.subscribe(
      result => this.userProfile = result
    );
    this.auth.auth0Client$.subscribe(
      result => this.auth0Client = result
    );
  }

}
