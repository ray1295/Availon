import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoysCatgComponent } from './boys-catg.component';

describe('BoysCatgComponent', () => {
  let component: BoysCatgComponent;
  let fixture: ComponentFixture<BoysCatgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoysCatgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoysCatgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
