import { Component } from '@angular/core';
import { Event } from '../interfaces/Event';
import { HttpClient } from '@angular/common/http'

@Component({
    selector: 'app-event-form',
    templateUrl: './event-form.component.html',
    styleUrls: ['./event-form.component.scss']
})
/** EventForm component*/
export class EventFormComponent {
  newEvent: Event;


  /** EventForm ctor */
  constructor(private http: HttpClient) {

  }

  submitEvent() {
    console.log(this.newEvent.eventName)
    return this.http.post('/api/event', this.newEvent);
  }
};

    //this.name = '';
    //this.date = '';

 



   
