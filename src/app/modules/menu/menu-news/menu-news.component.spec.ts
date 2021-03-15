import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {MenuNewsComponent} from './menu-news.component';

describe('MenuNewsComponent', () => {
  let component: MenuNewsComponent;
  let fixture: ComponentFixture<MenuNewsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MenuNewsComponent]
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
