import { TestBed } from '@angular/core/testing';

import { UseragendaService } from './useragenda.service';

describe('UseragendaService', () => {
  let service: UseragendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseragendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
