import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessProductsListComponent } from './business-products-list.component';

describe('BusinessProductsListComponent', () => {
  let component: BusinessProductsListComponent;
  let fixture: ComponentFixture<BusinessProductsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessProductsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
