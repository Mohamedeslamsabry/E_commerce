import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsbrandsComponent } from './detailsbrands.component';

describe('DetailsbrandsComponent', () => {
  let component: DetailsbrandsComponent;
  let fixture: ComponentFixture<DetailsbrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsbrandsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsbrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
