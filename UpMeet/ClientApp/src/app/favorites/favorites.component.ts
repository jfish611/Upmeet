import { Component } from '@angular/core';
import { FavoritesService } from '../favorites.service'
import { EventDataService } from '../event-data.service'
import { Favorite, JoinedItem } from '../Interfaces/Favorites'

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.scss']
})
/** Favorites component*/
export class FavoritesComponent {
/** Favorites ctor */
 
  constructor(private favoriteService: FavoritesService, private eventService: EventDataService) { }

    favorites: JoinedItem[];

  ngOnInit() {
    this.favoriteService.getFavorites().subscribe(
      (data: JoinedItem[]) => {
        this.favorites = data;
        console.log(this.favorites);
      },
      error => console.error(error)
    );
  }
}
