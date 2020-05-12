export interface Favorite {
  FavoriteID: number;
  UserID: number;
  EventID: number;
}

export interface JoinedItem {

  favoriteID: number;
  userID: number;
  eventID: number;
  eventName: string;
  eventDate: string;
  eventDescription: string;
  eventCity: string;
  eventState: string;

}
