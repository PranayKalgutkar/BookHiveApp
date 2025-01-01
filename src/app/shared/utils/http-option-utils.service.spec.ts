import { TestBed } from '@angular/core/testing';

import { HttpOptionUtilsService } from './http-option-utils.service';

describe('HttpOptionUtilsService', () => {
  let service: HttpOptionUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpOptionUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
