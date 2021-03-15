import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {MenuColumnComponent} from './menu-column.component';

describe('MenuColumnComponent', () => {
  let component: MenuColumnComponent;
  let fixture: ComponentFixture<MenuColumnComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MenuColumnComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
