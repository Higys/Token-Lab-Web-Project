using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Api_Calendar.Models
{
    public class Event
    {
        [Key]
        [System.Text.Json.Serialization.JsonIgnore]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }

        [Required(AllowEmptyStrings = false)]
        public string description { get; set; }

        [Required(AllowEmptyStrings = false)]
        public DateTime dateStart { get; set; }

        [Required(AllowEmptyStrings = false)]
        public DateTime dateFinish { get; set; }

    }

}
