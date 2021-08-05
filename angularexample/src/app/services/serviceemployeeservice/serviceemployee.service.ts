import { Injectable } from '@angular/core';
import { Service } from '../service';
import { HttpClient } from '@angular/common/http';

import { ServiceEmployee } from '../';

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

  postServiceEmployee(servicecode:string, employeecode: string){
    return this.httpClient.post(super.getURI(), {servicecode:servicecode, employeecode:employeecode});
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

  getByServiceId(id:string){
    return this.httpClient.get(`${super.getURI()}/${id}`);
  }

  deleteByServiceId(id:string){
    return this.httpClient.delete(`${super.getURI()}/${id}`);
  }


  
 /* putServiceEmployee(id:string, serviceemployee: ServiceEmployee){
    return this.httpClient.put(`${super.getURI()}/${id}`, serviceemployee);
  }*/


}

