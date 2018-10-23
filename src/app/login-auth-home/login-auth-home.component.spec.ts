import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAuthHomeComponent } from './login-auth-home.component';

describe('LoginAuthHomeComponent', () => {
  let component: LoginAuthHomeComponent;
  let fixture: ComponentFixture<LoginAuthHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAuthHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAuthHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
