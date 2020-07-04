import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNewsComponent } from './menu-news.component';

describe('MenuNewsComponent', () => {
  let component: MenuNewsComponent;
  let fixture: ComponentFixture<MenuNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
