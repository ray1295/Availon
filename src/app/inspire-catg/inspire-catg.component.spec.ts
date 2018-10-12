import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspireCatgComponent } from './inspire-catg.component';

describe('InspireCatgComponent', () => {
  let component: InspireCatgComponent;
  let fixture: ComponentFixture<InspireCatgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspireCatgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspireCatgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
