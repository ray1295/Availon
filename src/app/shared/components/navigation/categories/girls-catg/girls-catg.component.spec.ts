import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GirlsCatgComponent } from './girls-catg.component';

describe('GirlsCatgComponent', () => {
  let component: GirlsCatgComponent;
  let fixture: ComponentFixture<GirlsCatgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GirlsCatgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GirlsCatgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
