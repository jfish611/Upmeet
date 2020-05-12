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
    public class FavoritesController : ControllerBase
    {
        private DAL dal;

        public FavoritesController(IConfiguration config)
        {
            dal = new DAL(config.GetConnectionString("default"));
        }

        [HttpGet("userID/{id}")]
        public IEnumerable<JoinedItem> GetUserFavorites(int userID)
        {
            IEnumerable<JoinedItem> UserFavorites = dal.GetFavorites(userID);
            return UserFavorites;
        }

        //Post/Add to Favorites
        [HttpPost]
        public Object AddToFavorites(Favorite thing)
        {
            Object results = dal.AddToFavorites(thing);
            return results;
        }
    }
}