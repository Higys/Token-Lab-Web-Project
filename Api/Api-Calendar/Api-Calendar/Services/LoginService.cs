using Api_Calendar.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api_Calendar.Services
{
    public class LoginService : ILoginService
    {
        protected readonly DataContext dataContext;

        public LoginService(DataContext _dataContext)
        {
            dataContext = _dataContext;
        }

        public async Task<Users> Login(string email, string password)
        {
            var user = await dataContext.Users.FirstOrDefaultAsync(q => q.email == email && q.password == password.ToUpper());

            if (user == null)
            {
                throw new Exception("Usuario e/ou senha incorreto(s)");
            }

            return user;
        }

    }

    public interface ILoginService
    {
        Task<Users> Login(string email, string password);
    }
}
