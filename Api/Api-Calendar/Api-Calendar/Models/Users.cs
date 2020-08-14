using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Api_Calendar.Models
{
    [Table("Users")]
    public class Users
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }

        [Required(AllowEmptyStrings = false)]
        public string email { get; set; }

        [Required(AllowEmptyStrings = false)]
        [StringLength(128)]
        public string password { get; set; }


    }
}
