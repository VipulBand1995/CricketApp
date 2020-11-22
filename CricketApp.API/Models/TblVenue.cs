using System;
using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Models
{
    public class TblVenue
    {
        [Key]
        public int Venue_Id  { get; set; }
        public string Venue_name { get; set; }
        public string Venue_city { get; set; }
        public string audience { get; set; }
    }
}