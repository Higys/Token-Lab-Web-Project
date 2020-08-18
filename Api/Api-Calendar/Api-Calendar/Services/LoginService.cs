using Api_Calendar.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;

namespace Api_Calendar.Services
{
    public class LoginService : ILoginService
    {
        protected readonly DataContext dataContext;

        public LoginService(DataContext _dataContext){ dataContext = _dataContext; }

        public async Task<Users> Login(string email, string password)
        {
            Console.Write(dataContext.Users);
            var user = await dataContext.Users.FirstOrDefaultAsync(q => q.email == email && q.password == password);

            return user;
        }



    }

    public interface ILoginService
    {
        public Task<Users> Login(string email, string password);
    }
}
