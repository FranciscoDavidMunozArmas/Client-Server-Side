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

  postServiceEmployee(servicecode:string, employeecode: string){
    return this.httpClient.post(super.getURI(), {servicecode:servicecode, employeecode:employeecode});
  }

  deleteAll(){
    return this.httpClient.delete(super.getURI());
  }



}

