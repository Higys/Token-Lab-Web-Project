import { NewEventModalComponent } from './../../modals/new-event-modal/new-event-modal.component';
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

  public name: string;
  public description: string;
  public dateStart: string;
  public dateFinish: string;

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
    });
  }

  // Open new event dialog
  openNewDialog(): void {
    const dialogRef = this.dialog.open(NewEventModalComponent, {
      width: '700px',
      data: {name: this.name, description: this.description, dateStart: this.dateStart, dateFinish: this.dateFinish }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  // Open delete event dialog
  openConfirmDialog(id: number, name: string) {
    const dialogRef = this.dialog.open(ConfirmDeletionModalComponent, {
      width: '550px',
      autoFocus: false,
      data: {id, name}
    });
  }


  // Open edit event dialog
  openEditDialog(event: EventModel) {

    this.formatDate(event);


    // console.log(this.dateFinishEdit);
    // console.log(this.dateStartEdit);

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

    const arrayDateTimeStart = event.dateStart.split('T');
    const arrayDateTimeFinish = event.dateFinish.split('T');

    const dateArrayStart = arrayDateTimeStart[0].split('-');
    // console.log(dateArrayStart);
    const dateArrayFinish = arrayDateTimeFinish[0].split('-');
    // console.log(dateArrayFinish);

    this.dateStartEdit =  dateArrayStart[1] + '-' + dateArrayStart[2] + '-' + dateArrayStart[0];
    this.dateFinishEdit = dateArrayFinish[1] + '-' + dateArrayFinish[2] + '-' + dateArrayFinish[0];
  }

}
