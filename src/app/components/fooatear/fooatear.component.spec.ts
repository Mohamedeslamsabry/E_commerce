import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooatearComponent } from './fooatear.component';

describe('FooatearComponent', () => {
  let component: FooatearComponent;
  let fixture: ComponentFixture<FooatearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooatearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooatearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
