import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppointmentService } from '../appointmentservice/appointment.service';
import { Service } from '../service';

@Injectable({
  providedIn: 'root'
})

export class AppointmentserviceService extends Service{

  constructor(private httpClient: HttpClient) {
    super();
    super.extendsURI("/appointmentservice");
  }
  getAll(){
    return this.httpClient.get(super.getURI());
  }

  getByAppointmentId(id:string){
    return this.httpClient.get(`${super.getURI()}/${id}`);
  }

  postAppointment(appointmentservice:AppointmentService){
    return this.httpClient.post<AppointmentService>(super.getURI(), appointmentservice);
  }

  getByServiceId(id:string){
    return this.httpClient.get(`${super.getURI()}/${id}`);
  }

  putAppointment(id:string, appointmentservice: AppointmentService){
    return this.httpClient.put(`${super.getURI()}/${id}`, appointmentservice);
  }

  

}
