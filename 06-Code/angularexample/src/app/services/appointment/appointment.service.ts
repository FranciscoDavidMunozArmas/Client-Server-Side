import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from 'src/app/interfaces/Appointment';
import { ServiceParent } from '../service.parent';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService extends ServiceParent {
  constructor(private httpClient: HttpClient) {
    super();
    super.extendsURI("/users/appointments");
  }

  getAppointments(userid: string) {
    return this.httpClient.get(`${super.getURI()}/${userid}`);
  }

  postAppointment(userid: string, appointment: Appointment) {
    return this.httpClient.post(`${super.getURI()}/${userid}`, appointment);
  }

  deleteAppointments(userid: string) {
    return this.httpClient.delete(`${super.getURI()}/${userid}`);
  }

  getAppointment(userid: string, appointmentid: string) {
    return this.httpClient.get(`${super.getURI()}/${userid}/${appointmentid}`);
  }

  putAppointment(userid: string, appointmentid: string, appointment: Appointment) {
    return this.httpClient.put(`${super.getURI()}/${userid}/${appointmentid}`, appointment);
  }

  deleteAppointment(userid: string, appointmentid: string) {
    return this.httpClient.delete(`${super.getURI()}/${userid}/${appointmentid}`);
  }
}
