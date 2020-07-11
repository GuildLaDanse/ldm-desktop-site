import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu-tile-image-content',
  templateUrl: './menu-tile-image-content.component.html',
  styleUrls: ['./menu-tile-image-content.component.scss']
})
export class MenuTileImageContentComponent implements OnInit {

  @Input() imageUrl = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
