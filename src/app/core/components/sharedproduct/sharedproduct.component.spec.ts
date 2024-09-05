import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedproductComponent } from './sharedproduct.component';

describe('SharedproductComponent', () => {
  let component: SharedproductComponent;
  let fixture: ComponentFixture<SharedproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedproductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharedproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
