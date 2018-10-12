import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandbagComponent } from './handbag.component';

describe('HandbagComponent', () => {
  let component: HandbagComponent;
  let fixture: ComponentFixture<HandbagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandbagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandbagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
