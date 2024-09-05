import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfoundedComponent } from './notfounded.component';

describe('NotfoundedComponent', () => {
  let component: NotfoundedComponent;
  let fixture: ComponentFixture<NotfoundedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotfoundedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotfoundedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
