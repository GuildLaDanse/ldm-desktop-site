import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTileIconContentComponent } from './menu-tile-icon-content.component';

describe('MenuTileIconContentComponent', () => {
  let component: MenuTileIconContentComponent;
  let fixture: ComponentFixture<MenuTileIconContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuTileIconContentComponent ]
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
