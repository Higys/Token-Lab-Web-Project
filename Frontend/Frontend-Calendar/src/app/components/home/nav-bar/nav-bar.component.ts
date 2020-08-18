import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { NewEventModalComponent } from '../../modals/new-event-modal/new-event-modal.component';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  name: string;
  description: string;
  dateStart: string;
  dateFinish: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void { }

  openDialog(): void {
    const dialogRef = this.dialog.open(NewEventModalComponent, {
      width: '700px',
      data: {name: this.name, description: this.description, dateStart: this.dateStart, dateFinish: this.dateFinish }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
}
