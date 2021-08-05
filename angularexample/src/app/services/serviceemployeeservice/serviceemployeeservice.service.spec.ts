import { TestBed } from '@angular/core/testing';

import { ServiceemployeeserviceService } from './serviceemployeeservice.service';

describe('ServiceemployeeserviceService', () => {
  let service: ServiceemployeeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceemployeeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
