
import { Injectable } from  '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { tap } from  'rxjs/operators';
import { Observable, BehaviorSubject } from  'rxjs';

import { Storage } from  '@ionic/storage';
import { User } from  '../models/user';
import { FormResponse } from  '../models/form-response';
import { environment } from 'src/environments/environment';
import { Code } from '../models/codeVerif';
import { mailReset } from '../models/link-reset';



@Injectable({
  providedIn: 'root'
})
export class UsersService {
    endpoint = `${environment.apiUrl}/users`;
    verif = `${this.endpoint}/verif`;

 constructor(private http: HttpClient) { }

  register(user: User) {
    delete user.iduser;
    return this.http.post<User>(this.endpoint, user);
  }

  getUsers() {
    return this.http.get<User[]>(this.endpoint);
  }

  getUserById(id: string) {
    return this.http.get<User>(`${this.endpoint}/${id}`);
  }

  updateprofile(user: User) {
    return this.http.put<User>(`${this.endpoint}/${user.iduser}`, user);
  }

  deleteUser(id: string) {
    return this.http.delete(`${this.endpoint}/${id}`);
  }
  // eslint-disable-next-line @typescript-eslint/naming-convention
  CodeVerif(code: Code){
    return this.http.post<Code[]>(this.verif, code);
  }
  //reset-password
  //resetPassword(){
    //return this.http.post<mailReset[]>(this.endpoint, )
  //}
}
