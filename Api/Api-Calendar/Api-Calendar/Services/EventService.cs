using Api_Calendar.Models;
using Microsoft.EntityFrameworkCore.Query.Internal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api_Calendar.Services
{
    public class EventService : IEventService
    {
        private readonly DataContext dataContext;

        public EventService(DataContext _dataContext) { dataContext = _dataContext; }

        public List<Event> getEvents()
        {
            List<Event> listEvents = dataContext.Events.ToList();
            return listEvents;
        }

        public Event getEventDetail(int id)
        {
            Event eventDetail = dataContext.Events.FirstOrDefault(q => q.id == id);
            return eventDetail;
        }

        public bool addEvents(Event events)
        {
            dataContext.Add(events);

            if (dataContext.SaveChanges() > 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        
        }

        public bool editEvent(int id, string name, string description, string dateFinish, string dateStart)
        {
            
            try
            {
                Event eventEdit = dataContext.Events.First(q => q.id == id);
                eventEdit.name = name;
                eventEdit.description = description;
                eventEdit.dateFinish = DateTime.Parse(dateFinish);
                eventEdit.dateStart = DateTime.Parse(dateStart);
                dataContext.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine("Erro: " + ex.Message.ToString());
                return false;
            }
           
        }

        public bool delEvent(int id)
        {
            try
            {
                Event eventDelete = dataContext.Events.First(q => q.id == id);
                dataContext.Events.Remove(eventDelete);
                dataContext.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine("Erro: " + ex.Message.ToString());
                return false;
            }
        }

    }

    public interface IEventService
    {
        List<Event> getEvents();
        Event getEventDetail(int id);
        bool addEvents(Event events);
        bool editEvent(int id, string name, string description, string dateFinish, string dateStart);
        bool delEvent(int id);

    }
}
