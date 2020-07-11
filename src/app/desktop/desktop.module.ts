import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopNavigationBarComponent} from './top-nav-bar/top-navigation-bar.component';
import {NavigationMenuComponent} from './top-nav-bar/nav-menu/navigation-menu.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    TopNavigationBarComponent,
    NavigationMenuComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  exports: [
    TopNavigationBarComponent
  ]
})
export class DesktopModule {
}
