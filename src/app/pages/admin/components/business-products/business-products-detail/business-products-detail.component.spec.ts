import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessProductsDetailComponent } from './business-products-detail.component';

describe('BusinessProductsDetailComponent', () => {
  let component: BusinessProductsDetailComponent;
  let fixture: ComponentFixture<BusinessProductsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessProductsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessProductsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
