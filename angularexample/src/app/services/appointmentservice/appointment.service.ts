import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from '../service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService extends Service{
  constructor(private httpClient: HttpClient) {
    super();
    super.extendsURI("/appointment");
   }

   getAll(id: string){
     return this.httpClient.get(super.getURI());
   }

   postAppointment(appointmentcode:string,usercode:string,appointmentdayhour:Date){
     return this.httpClient.post(super.getURI(),{appointmentcode:appointmentcode, usercode:usercode, appointmentdayhour:appointmentdayhour});
   }

   deleteAll(){
     return this.httpClient.delete(super.getURI());
   }

   getById(id:string){
     return this.httpClient.get(`${super.getURI()}/${id}`);
   }

  deleteById(id:string){
    return this.httpClient.delete(`${super.getURI()}/${id}`);
  }

  getAllByUser(id:string){
    return this.httpClient.get(`${super.getURI()}/${id}`);
  }
}