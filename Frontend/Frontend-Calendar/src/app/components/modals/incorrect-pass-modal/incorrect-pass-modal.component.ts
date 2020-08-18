import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incorrect-pass-modal',
  templateUrl: './incorrect-pass-modal.component.html',
  styleUrls: ['./incorrect-pass-modal.component.css']
})
export class IncorrectPassModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<IncorrectPassModalComponent>) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
