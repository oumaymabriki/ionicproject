
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginForm } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpoint = `${environment.apiUrl}/users/login`;

  constructor(private http: HttpClient) { }

  authenticate(login: LoginForm) {
    return this.http.post(this.endpoint, login);
  }

}
