import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { detailscatResolver } from './detailscat.resolver';

describe('detailscatResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => detailscatResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
