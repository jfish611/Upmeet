using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UpMeet.Models
{
    public class Favorite
    {
        public int FavoriteID { get; set; }
        public int UserID { get; set; }
        public int EventID { get; set; }
    }
}
