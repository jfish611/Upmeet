using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UpMeet.Models
{
    public class JoinedItem
    {
        public int FavoriteID { get; set; }
        public int UserID { get; set; }
        public int EventID { get; set; }
        public string EventName { get; set; }
        public DateTime EventDate { get; set; }
        public string EventDescription { get; set; }
        public string EventCity { get; set; }
        public string EventState { get; set; }
    }
}
