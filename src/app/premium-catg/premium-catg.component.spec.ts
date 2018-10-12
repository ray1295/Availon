import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumCatgComponent } from './premium-catg.component';

describe('PremiumCatgComponent', () => {
  let component: PremiumCatgComponent;
  let fixture: ComponentFixture<PremiumCatgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiumCatgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumCatgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
