import { IncorrectPassModalComponent } from './../modals/incorrect-pass-modal/incorrect-pass-modal.component';
import { tap } from 'rxjs/operators';
import { LoginService } from './../../services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/user/user.model';
import { Router } from '@angular/router';

import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent  {

  constructor(
    private loginService: LoginService,
    private router: Router,
    public dialog: MatDialog
    ) { }

  user: User;
  status: number;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);


async Login() {

  const result = await this.loginService.Login(this.emailFormControl.value, this.passwordFormControl.value)
  .pipe(tap(data => {
    this.status = data;
  })).toPromise().then(() =>  true).catch(() => false);

  if (result === true) {
    return this.router.navigateByUrl('/home');
  } else {
    this.openDialog();
  }

}

  openDialog(): void {
    const dialogRef = this.dialog.open(IncorrectPassModalComponent, {
      width: '300px',
    });
  }

}
