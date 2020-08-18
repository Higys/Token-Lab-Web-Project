using Api_Calendar.Models;
using Api_Calendar.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api_Calendar.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LoginController : ControllerBase
    {
        protected readonly ILoginService loginService;

        public LoginController(ILoginService _loginService)
        {
            loginService = _loginService;
        }

        [Route("[action]")]
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("teste");
        }

        
        [HttpPost]
        public IActionResult Login([FromBody] object _user)
        {

            var obj = new { email = "", password = "" };
            Console.WriteLine(obj);
            obj = Newtonsoft.Json.JsonConvert.DeserializeAnonymousType(_user.ToString(), obj);

            var result = loginService.Login(obj.email, obj.password).Result;
            //posso retornar o calendario?!!

            if(result != null) {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }



    }
}
