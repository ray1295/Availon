import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesCatgComponent } from './accessories-catg.component';

describe('AccessoriesCatgComponent', () => {
  let component: AccessoriesCatgComponent;
  let fixture: ComponentFixture<AccessoriesCatgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessoriesCatgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoriesCatgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
