import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageLayoutComponent } from './login-page-layout.component';

describe('LoginPageLayoutComponent', () => {
  let component: LoginPageLayoutComponent;
  let fixture: ComponentFixture<LoginPageLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPageLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
