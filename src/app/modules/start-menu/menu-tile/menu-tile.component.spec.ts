import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTileComponent } from './menu-tile.component';

describe('MenuTileComponent', () => {
  let component: MenuTileComponent;
  let fixture: ComponentFixture<MenuTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuTileComponent ]
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
