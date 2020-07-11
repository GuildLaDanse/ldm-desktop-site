import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuNewsComponent} from './menu-news/menu-news.component';
import {MenuColumnComponent} from './menu-column/menu-column.component';
import {MenuTileIconContentComponent} from './menu-tile-icon-content/menu-tile-icon-content.component';
import {MenuTileImageContentComponent} from './menu-tile-image-content/menu-tile-image-content.component';
import {MenuTileComponent} from './menu-tile/menu-tile.component';
import {MenuPageComponent} from './menu-page/menu-page.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    MenuNewsComponent,
    MenuColumnComponent,
    MenuTileIconContentComponent,
    MenuTileImageContentComponent,
    MenuTileComponent,
    MenuPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: []
})
export class MenuModule {
}
