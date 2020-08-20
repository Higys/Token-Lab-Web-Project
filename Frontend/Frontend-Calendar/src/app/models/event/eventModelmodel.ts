export class EventModel {
  id?: number;
  name: string;
  description: string;
  dateStart: string;
  dateFinish: string;
  timeStart?: string;
  timeFinish?: string;
}

export class EventList {
  eventList: EventModel[];
}
