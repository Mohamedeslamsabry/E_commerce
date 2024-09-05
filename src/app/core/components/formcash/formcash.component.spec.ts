import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcashComponent } from './formcash.component';

describe('FormcashComponent', () => {
  let component: FormcashComponent;
  let fixture: ComponentFixture<FormcashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormcashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormcashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
