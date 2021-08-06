import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsAppointmentComponent } from './buttons-appointment.component';

describe('ButtonsAppointmentComponent', () => {
  let component: ButtonsAppointmentComponent;
  let fixture: ComponentFixture<ButtonsAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
