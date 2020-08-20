import { EditEventComponent } from './../../modals/edit-event/edit-event.component';
import { ConfirmDeletionModalComponent } from './../../modals/confirm-deletion-modal/confirm-deletion-modal.component';

import { EventService } from './../../../services/event/event.service';
import { Component, OnInit, Output } from '@angular/core';
import { EventList, EventModel } from 'src/app/models/event/eventModelmodel';
import { MatDialog } from '@angular/material/dialog';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css']
})


export class EventsPageComponent implements OnInit {

  public eventList: EventList;
  private dateStartEdit: string;
  private dateFinishEdit: string;


  constructor(
    private eventService: EventService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.getEvents();
  }

  public getEvents(): void {
    this.eventService.GetEvents().subscribe((response: any) => {
      this.eventList = response;
      console.log(this.eventList);

    });
  }

  openConfirmDialog(id: number, name: string) {
    const dialogRef = this.dialog.open(ConfirmDeletionModalComponent, {
      width: '550px',
      autoFocus: false,
      data: {id, name}
    });
  }

  openEditDialog(event: EventModel) {

    this.formatDate(event);


    console.log(event.dateFinish);
    console.log(event.dateStart);

    const dialogRef = this.dialog.open(EditEventComponent, {
      width: '700px',
      autoFocus: false,
      data: {
        id: event.id,
        name: event.name,
        description: event.description,
        dateStart: this.dateStartEdit,
        dateFinish: this.dateFinishEdit,
        timeStart: event.dateStart.substring(11, 20),
        timeFinish: event.dateFinish.substring(11, 20),
      }
    });
  }

  formatDate(event: EventModel) {
    const arrayDateTimeStart = event.dateFinish.split('T');
    const arrayDateTimeFinish = event.dateFinish.split('T');
    const dateArrayStart = arrayDateTimeStart[0].split('-');
    const dateArrayFinish = arrayDateTimeFinish[0].split('-');
    this.dateStartEdit = dateArrayStart[0] + '-' + dateArrayStart[1] + '-' + dateArrayStart[2];
    this.dateFinishEdit = dateArrayFinish[0] + '-' + dateArrayFinish[1] + '-' + dateArrayFinish[2];
  }

}
