using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace UpMeet.Models
{
    public class DAL
    {
        SqlConnection connection;

        public DAL(string connectionString)
        {
            connection = new SqlConnection(connectionString);
        }

        //Get all distinct categories of products. 

        public IEnumerable<Event> GetAllEvents()
        {
            string queryString = "SELECT * FROM EventsTBL";
            IEnumerable<Event> Events = connection.Query<Event>(queryString);

            return Events;
        }

        public IEnumerable<Event> GetEventsByCity(string city)
        {
            string queryString = "SELECT * FROM EventsTBL Where EventCity=@city";
            IEnumerable<Event> EventsByCity = connection.Query<Event>(queryString, new { city = city });

            return EventsByCity;
        }




        public IEnumerable<JoinedItem> GetFavorites(int userID)
        {
            string queryString = "Select e.EventID, e.EventName, e.EventDate, e.EventDescription, e.EventCity, e.EventState, f.UserID, f.FavoriteID FROM EventsTBL e INNER JOIN Favorites f ON e.EventID = f.EventID Where UserID = @userID";
            IEnumerable<JoinedItem> userFavorites = connection.Query<JoinedItem>(queryString, new { userID = userID });

            return userFavorites;
        }

        public Object AddToFavorites(Favorite thing)
        {
            string commandString = "INSERT INTO Favorites (UserID, EventID) ";
            commandString += "Values(@userID, @eventID)";
            int results = connection.Execute(commandString, new { userID = thing.UserID, eventID = thing.EventID });

            return new
            {
                result = results,
                success = results == 1 ? true : false
            };
        }

        //delete (to remove a favorite)        
        public Object deleteFavorite(int id)
        {
            string commandString = "DELETE FROM Favorites WHERE favoriteID=@id";
            int results = connection.Execute(commandString, new { id = id });
            return new
            {
                result = results,
                success = results == 1 ? true : false
            };

        }
    }
}