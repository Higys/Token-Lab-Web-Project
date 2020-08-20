import { tap } from 'rxjs/operators';
import { EventService } from './../../../services/event/event.service';

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  name: string;
  description: string;
  dateStart: string;
  dateFinish: string;
  timeStart: string;
  timeFinish: string;
}

@Component({
  selector: 'app-new-event-modal',
  templateUrl: './new-event-modal.component.html',
  styleUrls: ['./new-event-modal.component.css']
})
export class NewEventModalComponent implements OnInit {

  datemask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
  timemask = [/\d/, /\d/, ':', /\d/, /\d/];

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

  async addEvent() {

    await this.formatDate();


    const result = this.eventService.AddEvent(this.data)
                       .pipe(tap())
                       .toPromise().then(() =>  true).catch(() => false);
    console.log(result);
  }

  async formatDate() {
    let dateArray = this.data.dateFinish.split('/');
    this.data.dateFinish = dateArray[2] + '-' + dateArray[1] + '-' + dateArray[0] + 'T' + this.data.timeFinish + ':00';
    dateArray = this.data.dateStart.split('/');
    this.data.dateStart = dateArray[2] + '-' + dateArray[1] + '-' + dateArray[0] + 'T' + this.data.timeStart + ':00';
  }

}
