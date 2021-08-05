import { Injectable } from '@angular/core';
import { Service } from '../service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceemployeeService extends Service{

  constructor(private httpClient: HttpClient) {
    super();
    super.extendsURI("/serviceemployee");
   }

   getAll(){
    return this.httpClient.get(super.getURI());
  }



}

