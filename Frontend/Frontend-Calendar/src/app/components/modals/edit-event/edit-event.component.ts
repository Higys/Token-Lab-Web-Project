import { tap } from 'rxjs/operators';
import { EventModel } from 'src/app/models/event/eventModelmodel';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EventService } from './../../../services/event/event.service';
import { Component, OnInit, Inject } from '@angular/core';

export interface DialogData {
  id: number;
  name: string;
  description: string;
  dateStart: string;
  dateFinish: string;
  timeStart: string;
  timeFinish: string;
}

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  datemask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
  timemask = [/\d/, /\d/, ':', /\d/, /\d/];

  constructor(
    public modal: MatDialogRef<EditEventComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private eventService: EventService,
  ) {}

  ngOnInit(): void { }

  onNoClick(): void {
    this.modal.close();
  }

  editEvent(): any {
    const eventObj = {
      id: this.data.id,
      name: this.data.name,
      description: this.data.description,
      dateStart: this.data.dateStart + 'T' + this.data.timeStart,
      dateFinish: this.data.dateFinish + 'T' + this.data.timeFinish,
    }
    console.log(eventObj);
    const result = this.eventService.EditEvent(eventObj)
    .pipe(tap(data => {}))
    .toPromise().then(() =>  true).catch(() => false);

    console.log(result);

  }


}
