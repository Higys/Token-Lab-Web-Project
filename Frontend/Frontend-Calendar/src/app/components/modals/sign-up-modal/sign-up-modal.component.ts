import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-sign-up-modal',
  templateUrl: './sign-up-modal.component.html',
  styleUrls: ['./sign-up-modal.component.css']
})
export class SignUpModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SignUpModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);

    passwordFormControl = new FormControl('', [
      Validators.required,
    ]);
  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
