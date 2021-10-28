import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  serviceEndpointR: any = 'http://localhost:7001/Taazaa/User/create';
  serviceEndpointL: any = 'http://localhost:7001/Taazaa/User/login';

  constructor(private httpClient: HttpClient) {
  }

  createAccount(reg: any) {
    /* if a function return type is observable it means to access the data from this function 
    or to give the data to the function we have to subscribe. */
    return this.httpClient.post(this.serviceEndpointR, reg);
  }
  loginAccount(login: any) {
    /* if a function return type is observable it means to access the data from this function 
    or to give the data to the function we have to subscribe. */
    return this.httpClient.post(this.serviceEndpointL, login);
  }
  loggedIn() {
    return sessionStorage.getItem('username');
  }
}
