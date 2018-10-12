import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenCatgComponent } from './men-catg.component';

describe('MenCatgComponent', () => {
  let component: MenCatgComponent;
  let fixture: ComponentFixture<MenCatgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenCatgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenCatgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
