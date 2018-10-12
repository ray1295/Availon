import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionCatgComponent } from './collection-catg.component';

describe('CollectionCatgComponent', () => {
  let component: CollectionCatgComponent;
  let fixture: ComponentFixture<CollectionCatgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionCatgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionCatgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
