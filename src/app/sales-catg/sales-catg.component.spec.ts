import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesCatgComponent } from './sales-catg.component';

describe('SalesCatgComponent', () => {
  let component: SalesCatgComponent;
  let fixture: ComponentFixture<SalesCatgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesCatgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesCatgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
