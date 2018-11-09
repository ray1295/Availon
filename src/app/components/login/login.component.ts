import { Component, OnInit, inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LoginDialogComponent } from '../../shared/modals/login-dialog/login-dialog.component';

// INTERFACE:
// ----------
// Class that describes what keys and values should exist in a property.
// TS validates interface - throws error when propety is missing.
// Seprated by commas

export interface UserData {
  user: string,
  email: string,
  name: string,
  password: string,
  passwordConfirmation: string,
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: string;
  email: string;
  name: string;
  password: string;
  passwordConfirmation: string;

  constructor(public dialog: MatDialog) {}
    openDialog(): void {
      let dialogRef = this.dialog.open(LoginDialogComponent, {
        height: '400px',
        width: '600px',
        data: {
          user: this.user,
          email: this.email,
          name: this.name,
          password: this.password,
          passwordConfirmation: this.passwordConfirmation,
        }
      });
    }

  ngOnInit() {
  }

}
