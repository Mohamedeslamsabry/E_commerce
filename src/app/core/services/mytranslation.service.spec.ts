import { TestBed } from '@angular/core/testing';

import { MytranslationService } from './mytranslation.service';

describe('MytranslationService', () => {
  let service: MytranslationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MytranslationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
