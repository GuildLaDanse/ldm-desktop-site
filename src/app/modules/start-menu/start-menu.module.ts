import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { MenuSectionComponent } from './menu-section/menu-section.component';
import { MenuTileComponent } from './menu-tile/menu-tile.component';



@NgModule({
  declarations: [MenuPageComponent, MenuSectionComponent, MenuTileComponent],
  imports: [
    CommonModule
  ]
})
export class StartMenuModule { }
