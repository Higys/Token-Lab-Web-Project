import { tap } from 'rxjs/operators';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login/login.service';

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

  status: number;

  constructor(
    public dialogRef: MatDialogRef<SignUpModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private loginService: LoginService) { }

    emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);

    passwordFormControl = new FormControl('', [
      Validators.required,
    ]);

  ngOnInit(): void { }

  signUp() {

    const result = this.loginService.SignUp(this.emailFormControl.value, this.passwordFormControl.value)
    .pipe(tap(data => {

      this.status = data.status;

    })).toPromise().then(() =>  true).catch(() => false);

    //finalizar confirmacao de criacao

    console.log(this.status);

    if (result) {
      console.log("deu");
    } else {
      console.log("nao deu");
    }
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

}
