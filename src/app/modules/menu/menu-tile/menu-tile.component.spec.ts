import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {MenuTileComponent} from './menu-tile.component';

describe('MenuTileComponent', () => {
  let component: MenuTileComponent;
  let fixture: ComponentFixture<MenuTileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MenuTileComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
