import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { torneioResolver } from './torneio.resolver';

describe('torneioResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => torneioResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
