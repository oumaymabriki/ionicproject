
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginForm } from '../models/login';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpoint = `${environment.apiUrl}/users/login`;

  constructor(private http: HttpClient) { }

  authenticate(login: LoginForm) {
    return this.http.post<User>(this.endpoint, login);
  }

}
