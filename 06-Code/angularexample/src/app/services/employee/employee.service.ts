import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from 'src/app/interfaces/Employee';
import { ServiceParent } from '../service.parent';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends ServiceParent {

  constructor(private httpClient: HttpClient) {
    super();
    super.extendsURI("/employee");
  }

  // getAll() {
  //   return this.httpClient.get<any[]>(super.getURI());
  // }
  // getById(id: string) {
  //   return this.httpClient.get(`${super.getURI()}/${id}`);
  // }
  // postService(service: Service) {
  //   return this.httpClient.post(super.getURI(), service);
  // }
  // deleteAll() {
  //   return this.httpClient.delete(super.getURI());
  // }
  // deleteById(id: string) {
  //   return this.httpClient.delete(`${super.getURI()}/${id}`);
  // }
  // putService(id: string, service: Service) {
  //   return this.httpClient.put(`${super.getURI()}/${id}`, service);
  // }

  getEmployees() {
    const employees: Employee[] = [
      {
        _id: "1",
        name: "Juan"
      },
      {
        _id: "2",
        name: "Mario"
      },
      {
        _id: "3",
        name: "Maria"
      },
      {
        _id: "4",
        name: "Loreto"
      }
    ]
  }
}
