import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
    this.isUserLogged = false;
  }

  isUserLogged: boolean;

  login(loginData: any) {
    return this.http.post('http://mongobackend:3000/users/login/', loginData);
  }

  isLogged() {
    return this.isUserLogged;
  }

  isLogin(){
    this.isUserLogged = true;
  }

  isLogout(){
    this.isUserLogged = false;
  }
}
