import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from '../service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService extends Service {

  constructor(private httpClient: HttpClient) {
    super();
    super.extendsURI("/service");
  }

  getAll() {
    return this.httpClient.get(super.getURI());
  }
  getById(id: string) {
    return this.httpClient.get(`${super.getURI()}/${id}`);
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
  }

}
