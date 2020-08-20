import { User } from './../../models/user/user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from 'src/main';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private defaultHeader: HttpHeaders;

  Login(email: string, password: string): Observable<any> {
    const url = API_URL + '/Login';
    const user: User = {email, password};
    return this.http.post(url, user, {headers: this.defaultHeader});
  }

  SignUp(email: string, password: string): Observable<any>{
    const url = API_URL + '/Login/SignUp/';
    const user: User = {email, password};
    return this.http.post(url, user, {headers: this.defaultHeader});
  }

}
