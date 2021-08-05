import { Injectable } from '@angular/core';
import { Service } from '../service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceemployeeService extends Service{

  constructor(private http: HttpClient) {
    super();
    super.extendsURI("/serviceemployee");
   }
}
