using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using UpMeet.Models;

namespace UpMeet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventController : ControllerBase
    {
        private DAL dal;

        public EventController(IConfiguration config)
        {
            dal = new DAL(config.GetConnectionString("default"));
        }

        //Get all events
        //Get events by city

        [HttpGet]
        public IEnumerable<Event> GetAll()
        {
            IEnumerable<Event> Events = dal.GetAllEvents();
            return Events;
        }

        [HttpGet("city /{city}")]
        public IEnumerable<Event> EventsByCity(string city)
        {
            IEnumerable<Event> EventsByCity = dal.GetEventsByCity(city);
            return EventsByCity;
        }

        //Post new Event
    }
}