import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-construction-tile',
  templateUrl: './construction-tile.component.html',
  styleUrls: ['./construction-tile.component.scss']
})
export class ConstructionTileComponent implements OnInit {

  @Input() size = 'single';
  @Input() label = '';

  @Input() iconStyle: string = null;
  @Input() icon: string = null;

  constructor() {
  }

  ngOnInit(): void {
  }

  cssIconStyle() {

    let cssClass = 'fas';

    switch (this.iconStyle) {
      case 'solid': {
        cssClass = 'fas';
        break;
      }
      case 'regular': {
        cssClass = 'far';
        break;
      }
      case 'light': {
        cssClass = 'fal';
        break;
      }
      case 'duotone': {
        cssClass = 'fad';
        break;
      }
      case 'brands': {
        cssClass = 'fab';
        break;
      }
      default: {
        cssClass = 'fas';
      }
    }

    return cssClass;
  }

}
