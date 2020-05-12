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
            IEnumerable<Event> EventsByCity = connection.Query<Event>(queryString, new {city = city});

            return EventsByCity;
        }
    }
}
