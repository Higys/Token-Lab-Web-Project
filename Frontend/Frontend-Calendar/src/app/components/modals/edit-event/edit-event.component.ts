import { tap } from 'rxjs/operators';
import { EventModel } from 'src/app/models/event/eventModelmodel';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EventService } from './../../../services/event/event.service';
import { Component, OnInit, Inject } from '@angular/core';
import { formatDate, Location } from '@angular/common';


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
  public eventObj: any;

  constructor(
    public modal: MatDialogRef<EditEventComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private eventService: EventService,
    private location: Location
  ) {}

  ngOnInit(): void { }

  onNoClick(): void {
    this.modal.close();
  }

  editEvent(): any {
    this.eventObj = {
      id: this.data.id,
      name: this.data.name,
      description: this.data.description,
      dateStart: this.data.dateStart + 'T' + this.data.timeStart,
      dateFinish: this.data.dateFinish + 'T' + this.data.timeFinish,
    };

    this.formatDate();

    const result = this.eventService.EditEvent(this.eventObj)
    .pipe(tap())
    .toPromise().then(() =>  true).catch(() => false);

  }

  formatDate() {
    let dateArray = this.eventObj.dateStart.replace(new RegExp('/', 'g'), '-');
    dateArray = dateArray.split('T');
    let dateArrayEdit = dateArray[0].split('-');
    this.eventObj.dateStart = dateArrayEdit[2] + '-' + dateArrayEdit[0] + '-' + dateArrayEdit[1]  + 'T' + dateArray[1];
    dateArray = this.eventObj.dateFinish.replace(new RegExp('/', 'g'), '-');
    dateArray = dateArray.split('T');
    dateArrayEdit = dateArray[0].split('-');
    this.eventObj.dateFinish = dateArrayEdit[2] + '-' + dateArrayEdit[0] + '-' + dateArrayEdit[1] + 'T' + dateArray[1];
  }


}
