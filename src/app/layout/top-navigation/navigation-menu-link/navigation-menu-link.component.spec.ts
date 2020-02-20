import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationMenuLinkComponent } from './navigation-menu-link.component';

describe('NavigationMenuLinkComponent', () => {
  let component: NavigationMenuLinkComponent;
  let fixture: ComponentFixture<NavigationMenuLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationMenuLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationMenuLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
