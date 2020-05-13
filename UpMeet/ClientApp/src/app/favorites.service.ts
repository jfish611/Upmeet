import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Favorite, JoinedItem } from './Interfaces/Favorites';


@Injectable()
export class FavoritesService {

  userID: number;

  constructor(private http: HttpClient) {
    this.userID = Math.floor(Math.random() * 1000000) + 1;
  }


  getFavorites() {
    return this.http.get<JoinedItem[]>('/api/favorites/'+ this.userID);
  }

  deleteFavorite(eventID: number) {
    return this.http.delete('/api/favorites/' + eventID);
  }

  addFavorites(eventID: number) {
    let thing: Favorite = {
    FavoriteID: 0,
    UserID: this.userID,
    EventID: eventID
    }
     return this.http.post<Favorite>('api/favorites', thing)
  }
}


