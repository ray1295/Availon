import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenCatgComponent } from './women-catg.component';

describe('WomenCatgComponent', () => {
  let component: WomenCatgComponent;
  let fixture: ComponentFixture<WomenCatgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenCatgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenCatgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
