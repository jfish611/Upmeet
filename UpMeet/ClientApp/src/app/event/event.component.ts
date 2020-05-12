import { Component } from '@angular/core';
import { EventDataService } from '../event-data.service';
import { Event } from '../Interfaces/Event';
import { FavoritesService } from '../favorites.service';


@Component({
    selector: 'app-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.scss']
})

  

/** Event component*/
export class EventComponent {
  /** Event ctor */
  constructor(private eventData: EventDataService, private favoriteService: FavoritesService) { }

  events: Event[];

  ngOnInit() {
    this.eventData.getEvents().subscribe(
      (data: Event[]) => {
        this.events = data;
        console.log(this.events);
      },
      error => console.error(error)
    );
  }

  addToFavorites(id: number) {
    this.favoriteService.addFavorites(id).subscribe(
      error => console.error(error))
    //ToDo - come back to this after building up favorites component
  }
}

