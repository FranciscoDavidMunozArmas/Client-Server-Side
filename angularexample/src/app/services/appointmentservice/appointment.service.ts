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
}