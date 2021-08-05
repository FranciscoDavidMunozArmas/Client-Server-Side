import { TestBed } from '@angular/core/testing';

import { UseragendaserviceService } from './useragendaservice.service';

describe('UseragendaserviceService', () => {
  let service: UseragendaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseragendaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
