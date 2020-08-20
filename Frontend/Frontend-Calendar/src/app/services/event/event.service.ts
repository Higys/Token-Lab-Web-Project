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

  GetEvents(): Observable<any> {
    const url = API_URL + '/Event/get';
    return this.http.get(url, {headers: this.defaultHeader});
  }

  AddEvent(data: EventModel): Observable<any> {
    const url = API_URL + '/Event/';
    return this.http.post(url, data, {headers: this.defaultHeader});
  }

  EditEvent(event: EventModel) {
    const url = API_URL + '/Event/' + event.id + '/';
    return this.http.put(url, event, {headers: this.defaultHeader});
  }

  DelEvent(id: number): Observable<any> {
    const url = API_URL + '/Event/' + id + '/';
    return this.http.delete(url, {headers: this.defaultHeader});
  }



}
