import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuTileComponent } from './menu/menu-tile/menu-tile.component';
import { MenuContainerComponent } from './menu/menu-container/menu-container.component';
import { TopNavigationBarComponent } from './layout/top-navigation/top-navigation-bar/top-navigation-bar.component';
import { NavigationMenuComponent } from './layout/top-navigation/navigation-menu/navigation-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { NavigationMenuLinkComponent } from './layout/top-navigation/navigation-menu-link/navigation-menu-link.component';
import { NavigationMyAccountComponent } from './layout/top-navigation/navigation-my-account/navigation-my-account.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuTileComponent,
    MenuContainerComponent,
    TopNavigationBarComponent,
    NavigationMenuComponent,
    HomeComponent,
    NavigationMenuLinkComponent,
    NavigationMyAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
