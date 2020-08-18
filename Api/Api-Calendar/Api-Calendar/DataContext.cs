using Api_Calendar.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;



using System.Linq;
using System.Threading.Tasks;

namespace Api_Calendar
{
    public class DataContext : DbContext, IDataContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Users> Users { get; set; }
        public DbSet<Event> Events { get; set; }
    }

    public interface IDataContext
    {
        DbSet<Users> Users { get; set; }

        DbSet<Event> Events { get; set; }
    }
}
