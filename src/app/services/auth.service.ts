import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppStateService } from './app-state.service';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient , private appState : AppStateService) { }

    async login(username : string , password : string) : Promise<any> {
    let user : any = await  this.http.get(`http://localhost:8080/users?username_like=${username}`);
    console.log(password);     

    if (password == user.password) {
      let decodejwt = jwtDecode(user.token);
      this.appState.setAuthState({
        isAuthenticated : true ,
        username : user.username,
        roles : user.roles ,
        email : user.email
      }) ;
      return Promise.resolve(user);
    }else {
       return Promise.reject("bad credentials")
    };
    
  }
}
