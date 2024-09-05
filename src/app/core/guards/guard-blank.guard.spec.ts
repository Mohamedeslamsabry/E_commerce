import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { guardBlankGuard } from './guard-blank.guard';

describe('guardBlankGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guardBlankGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
