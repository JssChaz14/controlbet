import { TestBed } from '@angular/core/testing';

import { Picks } from './picks';

describe('Picks', () => {
  let service: Picks;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Picks);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
