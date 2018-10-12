import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsCatgComponent } from './brands-catg.component';

describe('BrandsCatgComponent', () => {
  let component: BrandsCatgComponent;
  let fixture: ComponentFixture<BrandsCatgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandsCatgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandsCatgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
