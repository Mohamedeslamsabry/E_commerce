import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { detailsbrandResolver } from './detailsbrand.resolver';

describe('detailsbrandResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => detailsbrandResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
