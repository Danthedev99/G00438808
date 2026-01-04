import { TestBed } from '@angular/core/testing';

import { MetricUsValueState } from './metric-us-value-state';

describe('MetricUsValueState', () => {
  let service: MetricUsValueState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetricUsValueState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
