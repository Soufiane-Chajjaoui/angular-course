import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  login(username : string , password : string) : any {
    return this.http.get(`http://localhost:8080/users?username_like=${username}`);
  }
}
