import { TestBed } from '@angular/core/testing';

import { AppointmentserviceserviceService } from './appointmentserviceservice.service';

describe('AppointmentserviceserviceService', () => {
  let service: AppointmentserviceserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentserviceserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
