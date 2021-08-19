import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceParent } from '../service.parent';
import { Service } from 'src/app/interfaces/Service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService extends ServiceParent {

  constructor(private httpClient: HttpClient) {
    super();
    super.extendsURI("/service");
  }

  /*getServices() {
    return this.httpClient.get<any[]>(super.getURI());
  }
  getById(id: string) {
    return this.httpClient.get<any>(`${super.getURI()}/${id}`);
  }
  postService(service: Service) {
    return this.httpClient.post(super.getURI(), service);
  }
  deleteAll() {
    return this.httpClient.delete(super.getURI());
  }
  deleteById(id: string) {
    return this.httpClient.delete(`${super.getURI()}/${id}`);
  }
  putService(id: string, service: Service) {
    return this.httpClient.put(`${super.getURI()}/${id}`, service);
  }*/

  getServices () {
    const services: Service[] = [
      {
        _id: "1",
        name: "Corte",
        description: "Lorem ipsum"
      },
      {
        _id: "2",
        name: "Lavado de cabello",
        description: "Lorem ipsum"
      },
      {
        _id: "3",
        name: "Corte express",
        description: "Lorem ipsum"
      }
    ];
    return services;
  }

}
