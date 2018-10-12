import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsCatgComponent } from './sports-catg.component';

describe('SportsCatgComponent', () => {
  let component: SportsCatgComponent;
  let fixture: ComponentFixture<SportsCatgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsCatgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsCatgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
