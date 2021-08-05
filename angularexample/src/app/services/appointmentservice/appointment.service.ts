import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from '../service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService extends Service{
<<<<<<< HEAD

  constructor(private httpClient: HttpClient) { 
    super();
    super.extendsURI("/appointment");
  }

  getAll(id: string){
    return this.httpClient.get(super.getURI());
  }
=======
  constructor(private httpClient: HttpClient) {
    super();
    super.extendsURI("/appointment");
   }

   getAll(id: string){
     return this.httpClient.get(super.getURI()+"/")
   }
>>>>>>> 61713c1bd1f99863702f17fa7a7487cc9104bdbd
}
