import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuTileComponent } from './menu/menu-tile/menu-tile.component';
import { MenuContainerComponent } from './menu/menu-container/menu-container.component';
import { DesktopComponent } from './layout/desktop/desktop.component';
import { TopNavigationBarComponent } from './layout/top-navigation/top-navigation-bar/top-navigation-bar.component';
import { NavigationMenuComponent } from './layout/top-navigation/navigation-menu/navigation-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    MenuTileComponent,
    MenuContainerComponent,
    DesktopComponent,
    TopNavigationBarComponent,
    NavigationMenuComponent
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
