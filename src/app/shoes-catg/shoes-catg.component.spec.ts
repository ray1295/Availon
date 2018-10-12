import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesCatgComponent } from './shoes-catg.component';

describe('ShoesCatgComponent', () => {
  let component: ShoesCatgComponent;
  let fixture: ComponentFixture<ShoesCatgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoesCatgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoesCatgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
