import { TestBed } from '@angular/core/testing';

import { Tipsters } from './tipsters';

describe('Tipsters', () => {
  let service: Tipsters;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tipsters);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
