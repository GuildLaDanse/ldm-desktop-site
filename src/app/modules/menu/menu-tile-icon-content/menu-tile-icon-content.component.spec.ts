import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {MenuTileIconContentComponent} from './menu-tile-icon-content.component';

describe('MenuTileIconContentComponent', () => {
  let component: MenuTileIconContentComponent;
  let fixture: ComponentFixture<MenuTileIconContentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MenuTileIconContentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTileIconContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
