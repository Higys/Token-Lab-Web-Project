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
    public class EventController : Controller
    {
        private readonly IEventService eventService;
        public EventController(IEventService _eventService) { eventService = _eventService; }

        [Route("[action]")]
        [HttpGet]
        public IList<Event> Get()
        {
            return eventService.getEvents();
        }

        [HttpGet("{id}")]
        public Event Get(int id)
        {
            return eventService.getEventDetail(id);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Event events)
        {
            try
            {
                eventService.addEvents(events);
                return Ok();
            }
            catch (Exception ex)
            {
                Console.WriteLine("Erro: " + ex.Message.ToString());
                return BadRequest();
            }
        }


        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] object _events)
        {
            var obj = new { name = "", description = "", dateStart = "", dateFinish = "" };
            obj = Newtonsoft.Json.JsonConvert.DeserializeAnonymousType(_events.ToString(), obj);
            try
            {
                eventService.editEvent(id, obj.name, obj.description, obj.dateFinish, obj.dateStart);
                return Ok();
            }
            catch (Exception ex)
            {
                Console.WriteLine("Erro: " + ex.Message.ToString());
                return BadRequest();
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                eventService.delEvent(id);
                return Ok();
            }
            catch (Exception ex)
            {
                Console.WriteLine("Erro: " + ex.Message.ToString());
                return BadRequest();
            }
        }


    }
}
