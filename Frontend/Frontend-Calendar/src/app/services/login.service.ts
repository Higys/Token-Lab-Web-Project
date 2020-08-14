import { User } from './../models/user/user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:5001/';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private defaultHeader: HttpHeaders;

  Login(email: string, password: string): Observable<User> {
    const url = `${API_URL}/Login`;
    const user: User = {email, password};
    const result = this.http.post<User>(url, user, {headers: this.defaultHeader});
    return result;

  }

}
