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
    super.extendsURI("/appointment");
  }

  getAll() {
    return this.httpClient.get(super.getURI());
  }

  post(appointment: Appointment) {
    return this.httpClient.post(super.getURI(), appointment);
  }

  deleteAll() {
    return this.httpClient.delete(super.getURI());
  }

  getByID(id:string) {
    return this.httpClient.get(`${super.getURI()}/${id}`);
  }

  put(id: string, appointment: Appointment) {
    return this.httpClient.put(`${super.getURI()}/${id}`, appointment);
  }

  deleteByID(id:string) {
    return this.httpClient.delete(`${super.getURI()}/${id}`);
  }

  getAllByUser(userID: string) {
    return this.httpClient.get<any[]>(`${super.getURI()}/user/${userID}`);
  }
}
