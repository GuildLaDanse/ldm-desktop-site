import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationMyAccountComponent } from './navigation-my-account.component';

describe('NavigationMyAccountComponent', () => {
  let component: NavigationMyAccountComponent;
  let fixture: ComponentFixture<NavigationMyAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationMyAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationMyAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
