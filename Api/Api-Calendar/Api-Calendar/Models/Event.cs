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
        
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
        public string name { get; set; }

        [Required(AllowEmptyStrings = false)]
        public string description { get; set; }

        [Required(AllowEmptyStrings = false)]
        public DateTime dateStart { get; set; }

        [Required(AllowEmptyStrings = false)]
        public DateTime dateFinish { get; set; }

    }

}
