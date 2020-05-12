import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from './Interfaces/Event';

@Injectable()
export class EventDataService {
  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get<Event[]>('/api/event');
  }
}
