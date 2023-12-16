import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  public productState : any  = {
     keyword : "",
     products: [] ,
     pageSize :4 ,
     pageCurrent : 1 ,
     numberpages : 3,
     totalProducts : 1 ,
     status : ""
  }

  public ErrorState : any = {
    message : ""
  }

  public AuthStatus : any = {
    isAuthenticated : false ,
    username : "",
    email : "",
    roles : undefined ,
    token : undefined

  }
  constructor() { }

  public setAuthState(state : any) {
    this.AuthStatus = {...this.AuthStatus , ...state};
  }
}
