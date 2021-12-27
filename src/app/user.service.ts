import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  private base_url: string = "https://reqres.in/api/users"





  constructor(private http: HttpClient) { }
  
 

  getUsers(){
    return this.http.get(this.base_url);
  }

  postUsers(data:any) {
    return this.http.post(this.base_url,data);
  }

  updateUsers(ID:any ,data:any) {
    return this.http.put(this.base_url + "/" + ID, data);
  }

  getOneUser(ID:any){
     return this.http.get(this.base_url + "/" + ID);

  }

  deleteUser(ID:any){
    return this.http.delete(this.base_url + "/" + ID);

 }

 }

