import { TestBed } from '@angular/core/testing';

import { ServiceemployeeService } from './serviceemployee.service';

describe('ServiceemployeeService', () => {
  let service: ServiceemployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceemployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
