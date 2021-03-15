import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {MenuTileImageContentComponent} from './menu-tile-image-content.component';

describe('MenuTileImageContentComponent', () => {
  let component: MenuTileImageContentComponent;
  let fixture: ComponentFixture<MenuTileImageContentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MenuTileImageContentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTileImageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
