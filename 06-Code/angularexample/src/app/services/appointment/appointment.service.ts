import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from 'src/app/interfaces/Appointment';
import { Service } from '../service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService extends Service {
  constructor(private httpClient: HttpClient) {
    super();
    super.extendsURI("/users/appointments");
  }

  getAll(userid: string) {
    return this.httpClient.get(`${super.getURI()}/${userid}`);
  }

  post(userid: string, appointment: Appointment) {
    return this.httpClient.post(`${super.getURI()}/${userid}`, appointment);
  }

  deleteAll(userid: string) {
    return this.httpClient.delete(`${super.getURI()}/${userid}`);
  }

  getByID(userid: string, appointmentid: string) {
    return this.httpClient.get(`${super.getURI()}/${userid}/${appointmentid}`);
  }

  put(userid: string, appointmentid: string, appointment: Appointment) {
    return this.httpClient.put(`${super.getURI()}/${userid}/${appointmentid}`, appointment);
  }

  deleteByID(userid: string, appointmentid: string) {
    return this.httpClient.delete(`${super.getURI()}/${userid}/${appointmentid}`);
  }
}
