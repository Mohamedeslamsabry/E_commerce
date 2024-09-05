import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaiscatComponent } from './detaiscat.component';

describe('DetaiscatComponent', () => {
  let component: DetaiscatComponent;
  let fixture: ComponentFixture<DetaiscatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetaiscatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetaiscatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
