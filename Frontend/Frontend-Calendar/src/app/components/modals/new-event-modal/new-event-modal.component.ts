import { tap } from 'rxjs/operators';
import { EventService } from './../../../services/event/event.service';

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  name: string;
  description: string;
  dateStart: string;
  dateFinish: string;
}

@Component({
  selector: 'app-new-event-modal',
  templateUrl: './new-event-modal.component.html',
  styleUrls: ['./new-event-modal.component.css']
})
export class NewEventModalComponent implements OnInit {

  datemask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

  constructor(
    public dialogRef: MatDialogRef<NewEventModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private eventService: EventService
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();

  }

  addEvent(): void {
    this.formatDate();
    const result = this.eventService.AddEvent(this.data)
                       .pipe(tap(data => {}))
                       .toPromise().then(() =>  true).catch(() => false);
  }

  formatDate(): void {
    let dateArray = this.data.dateFinish.split('/');
    this.data.dateFinish = dateArray[2] + '-' + dateArray[1] + '-' + dateArray[0];
    dateArray = this.data.dateStart.split('/');
    this.data.dateStart = dateArray[2] + '-' + dateArray[1] + '-' + dateArray[0];
  }

}
