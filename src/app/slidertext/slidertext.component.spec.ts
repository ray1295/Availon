import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidertextComponent } from './slidertext.component';

describe('SlidertextComponent', () => {
  let component: SlidertextComponent;
  let fixture: ComponentFixture<SlidertextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidertextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidertextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
