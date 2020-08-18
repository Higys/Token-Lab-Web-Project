import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/main';
import { EventModel } from 'src/app/models/event/eventModelmodel';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  private defaultHeader: HttpHeaders;

  AddEvent(data: EventModel): Observable<any> {
    const url = API_URL + '/Event/';
    return this.http.post(url, data, {headers: this.defaultHeader});
  }

  GetEvents(): Observable<any> {
    const url = API_URL + '/Event/get';
    return this.http.get(url, {headers: this.defaultHeader});
  }
}
