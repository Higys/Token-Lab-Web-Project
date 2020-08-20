import { tap } from 'rxjs/operators';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventService } from './../../../services/event/event.service';

import { Component, OnInit, Inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

export interface DialogData {
  id: number;
  name: string;
}

@Component({
  selector: 'app-confirm-deletion-modal',
  templateUrl: './confirm-deletion-modal.component.html',
  styleUrls: ['./confirm-deletion-modal.component.css']
})

export class ConfirmDeletionModalComponent implements OnInit {
  public name;

  constructor(
    public modal: MatDialogRef<ConfirmDeletionModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private eventService: EventService,
  ) { }

  ngOnInit(): void { }


  deleteEvent(id: number): any {
    const result = this.eventService.DelEvent(id).pipe(tap()).toPromise().then(() =>  true).catch(() => false);
    console.log(result);
    this.modal.close();
  }


}
