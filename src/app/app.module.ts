import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuTileComponent } from './menu/menu-tile/menu-tile.component';
import { MenuContainerComponent } from './menu/menu-container/menu-container.component';
import { DesktopComponent } from './desktop/desktop.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuTileComponent,
    MenuContainerComponent,
    DesktopComponent,
    TopNavigationComponent,
    NavigationMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
