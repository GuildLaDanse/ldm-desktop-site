import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigation-menu-link',
  templateUrl: './navigation-menu-link.component.html',
  styleUrls: ['./navigation-menu-link.component.scss']
})
export class NavigationMenuLinkComponent implements OnInit {

  @Input() label: string;
  @Input() targetRoute: string;

  constructor() { }

  ngOnInit(): void {
  }

}
