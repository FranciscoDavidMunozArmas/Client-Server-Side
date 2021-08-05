import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../interfaces/User';
import { Service } from '../service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends Service{

  constructor(private httpClient: HttpClient) {
    super();
    super.extendsURI("/user");
  }

  getAll(){
    return this.httpClient.get(super.getURI());
  }

  getById(id:string){
    return this.httpClient.get<any[]>(`${super.getURI()}/${id}`);
  }

  postUser(user: User){
    return this.httpClient.post<User>(super.getURI(), user);
  }

  postByCodePassword(code: string, password:string){
    return this.httpClient.post<User[]>(`${super.getURI()}/user`, {usercode: code, userpassword: password});
  }

  putUser(id:string, user: User){
    return this.httpClient.put(`${super.getURI()}/${id}`, user);
  }
  
  deleteAll(){
    return this.httpClient.delete(super.getURI());
  }

  deleteById(id:string){
    return this.httpClient.delete(`${super.getURI()}/${id}`);
  }
}
