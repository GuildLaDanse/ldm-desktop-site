import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuTileComponent } from './modules/menu/menu-tile/menu-tile.component';
import { MenuContainerComponent } from './modules/menu/menu-container/menu-container.component';
import { TopNavigationBarComponent } from './layout/top-nav-bar/top-navigation-bar.component';
import { NavigationMenuComponent } from './layout/top-nav-bar/nav-menu/navigation-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './pages/home/home.component';
import { NavigationMenuLinkComponent } from './layout/top-nav-bar/nav-menu/menu-link/navigation-menu-link.component';
import { NavigationMyAccountComponent } from './layout/top-nav-bar/nav-menu/my-account/navigation-my-account.component';
import { MenuPageComponent } from './modules/menu/pages/menu-page/menu-page.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { DebugModule } from './modules/debug/debug.module';
import { MenuNewsComponent } from './modules/menu/menu-news/menu-news.component';
import { MenuColumnComponent } from './modules/menu/menu-column/menu-column.component';
import { MenuTileIconContentComponent } from './modules/menu/menu-tile-icon-content/menu-tile-icon-content.component';
import { MenuTileImageContentComponent } from './modules/menu/menu-tile-image-content/menu-tile-image-content.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuTileComponent,
    MenuContainerComponent,
    TopNavigationBarComponent,
    NavigationMenuComponent,
    HomeComponent,
    NavigationMenuLinkComponent,
    NavigationMyAccountComponent,
    MenuPageComponent,
    WelcomeComponent,
    MenuNewsComponent,
    MenuColumnComponent,
    MenuTileIconContentComponent,
    MenuTileImageContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule,
    DebugModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
