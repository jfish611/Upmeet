import { Component, Output, EventEmitter } from '@angular/core';
import { Event } from '../interfaces/Event';
import { EventDataService } from '../event-data.service';


@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
/** EventForm component*/
export class EventFormComponent {
  newEvent: Event = { eventName: '', eventDate: '', eventCity: '', eventDescription: '', eventState: '', eventID: 0 };
  hideForm: boolean = false;
  @Output() refreshPage = new EventEmitter();

  /** EventForm ctor */
  constructor(private eventData: EventDataService) {

  }

  submitEvent() {
    console.log(this.newEvent.eventName, this.newEvent.eventState);
    this.eventData.submitEvent(this.newEvent).subscribe(
      (data: any) => {
      },
      error => console.error(error)

    );
    this.newEvent.eventName = '';
    this.newEvent.eventDate = '';
    this.newEvent.eventCity = '';
    this.newEvent.eventDescription = '';
    this.newEvent.eventState = '';
    this.hideForm = true;
    this.eventData.getEvents().subscribe((data: any) => {
    this.refreshPage.emit(null);
    },
      error => console.error(error)

    );
  }








}
