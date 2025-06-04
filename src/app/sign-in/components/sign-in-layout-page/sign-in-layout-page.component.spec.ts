import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInLayoutPageComponent } from './sign-in-layout-page.component';

describe('SignInLayoutPageComponent', () => {
  let component: SignInLayoutPageComponent;
  let fixture: ComponentFixture<SignInLayoutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignInLayoutPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignInLayoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
