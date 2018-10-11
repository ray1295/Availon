import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewinCatComponent } from './newin-cat.component';

describe('NewinCatComponent', () => {
  let component: NewinCatComponent;
  let fixture: ComponentFixture<NewinCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewinCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewinCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
