import { TestBed } from '@angular/core/testing';

import { UrlDetailsService } from './url-details.service';

describe('UrlDetailsService', () => {
  let service: UrlDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
