import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ConstructionTileComponent} from './construction-tile.component';

describe('constructionTileComponent', () => {
  let component: ConstructionTileComponent;
  let fixture: ComponentFixture<ConstructionTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConstructionTileComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructionTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
