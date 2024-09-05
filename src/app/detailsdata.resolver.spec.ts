import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { detailsdataResolver } from './detailsdata.resolver';

describe('detailsdataResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => detailsdataResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
