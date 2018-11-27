import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessProductsItemComponent } from './business-products-item.component';

describe('BusinessProductsItemComponent', () => {
  let component: BusinessProductsItemComponent;
  let fixture: ComponentFixture<BusinessProductsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessProductsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessProductsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
