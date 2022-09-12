import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Center } from '../models/center';

@Injectable({
  providedIn: 'root'
})
export class CentersService {

  endpoint = environment.apiUrl + '/centers';
  options = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: ''
    })
  }
  

  constructor(private http: HttpClient) { }

  getCenters() {
    this.setAuthorizationHeader();
    return this.http.get<Center[]>(this.endpoint);
  }

  addCenter(center: Center) {
    this.setAuthorizationHeader();
    return this.http.post<Center>(`${this.endpoint}/register`, center, this.options);
  }

  getCenterById(id: string) {
    return this.http.get<Center>(`${this.endpoint}/${id}`);
  }

  updateCenter(center: Center) {
    this.setAuthorizationHeader();
    return this.http.put<Center>(`${this.endpoint}/${center._id}`, center, this.options);
  }

  deleteCenter(id: string) {
    return this.http.delete<Center>(`${this.endpoint}/${id}`);
  }

  setAuthorizationHeader() {
    this.options.headers = this.options.headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`)
  }


}
