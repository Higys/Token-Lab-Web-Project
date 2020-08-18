import { User } from './../../models/user/user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const API_URL = 'https://localhost:44341/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private defaultHeader: HttpHeaders;

  Login(email: string, password: string): Observable<any> {

    const user: User = {email, password};
    return this.http.post(API_URL, user, {headers: this.defaultHeader});

  }

}
