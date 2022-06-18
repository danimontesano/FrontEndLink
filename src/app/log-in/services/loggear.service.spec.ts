import { TestBed } from '@angular/core/testing';

import { LoggearService } from './loggear.service';

describe('LoggearService', () => {
  let service: LoggearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
