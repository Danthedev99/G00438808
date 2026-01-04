import { TestBed } from '@angular/core/testing';

import { MyHttp } from './my-http';

describe('MyHttp', () => {
  let service: MyHttp;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyHttp);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
