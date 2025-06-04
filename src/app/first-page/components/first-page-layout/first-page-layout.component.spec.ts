import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPageLayoutComponent } from './first-page-layout.component';

describe('FirstPageLayoutComponent', () => {
  let component: FirstPageLayoutComponent;
  let fixture: ComponentFixture<FirstPageLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstPageLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
