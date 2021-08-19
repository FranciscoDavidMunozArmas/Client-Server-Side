import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../interfaces/User';
import { ServiceParent } from '../service.parent';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ServiceParent{

  constructor(private httpClient: HttpClient) {
    super();
    super.extendsURI("/users");
  }

  getUsers(){
    return this.httpClient.get<User[]>(super.getURI());
  }

  getUser(id:string){
    return this.httpClient.get<User>(`${super.getURI()}/${id}`);
  }

  postUser(user: User){
    const fd = new FormData();
    fd.append("name", user.name);
    fd.append("password", user.password);
    return this.httpClient.post<User>(super.getURI(), fd);
  }

  putUser(id:string, user: User, photo: File){
    const fd = new FormData();
    fd.append("name", user.name);
    fd.append("password", user.password);
    fd.append("photo", photo);
    return this.httpClient.put(`${super.getURI()}/${id}`, fd);
  }
  
  deleteUsers(){
    return this.httpClient.delete(super.getURI());
  }

  deleteUser(id:string){
    return this.httpClient.delete(`${super.getURI()}/${id}`);
  }

  allowAccess(user: User){
    return this.httpClient.post(`${super.getURI()}/access`, user);
  }
}
