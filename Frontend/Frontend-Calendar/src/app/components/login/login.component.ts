import { SignUpModalComponent } from './../modals/sign-up-modal/sign-up-modal.component';
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
  loginId = 1;
  signUpId = 2;


  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);


async login() {

  const result = await this.loginService.Login(this.emailFormControl.value, this.passwordFormControl.value)
  .pipe(tap(data => {
    this.status = data;
  })).toPromise().then(() =>  true).catch(() => false);

  if (result === true) {
    return this.router.navigateByUrl('/home');
  } else {
    this.openDialog(this.loginId);
  }

}

  signUp(): void {
    this.openDialog(this.signUpId);
  }

  openDialog(actionId: number) {
    if (actionId === 1) {
      const dialogRef = this.dialog.open(IncorrectPassModalComponent, {
        width: '300px',
      });
    }
    if (actionId === 2) {
      const dialogRef = this.dialog.open(SignUpModalComponent, {
        width: '300px',
      });
    }

  }

}
