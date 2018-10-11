import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RegisterDialogComponent } from '../modals/register-dialog/register-dialog.component';

export interface UserData {
  user: string;
  email: string;
  name: string;
  password: string;
  passwordConfirmation: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: string;
  email: string;
  name: string;
  password: string;
  passwordConfirmation: string;

  constructor(public dialog: MatDialog) { }
  openDialog(): void {
    let dialogRef = this.dialog.open(RegisterDialogComponent, {
      height: '400px',
      width: '600px',
      // Using 'data' to pass information to dialog component 
      data: {
        user: this.user,
        email: this.email,
        name: this.name,
        password: this.password,
        passwordConfirmation: this.passwordConfirmation,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.user = result;
    });
  }

  ngOnInit() {
    
  }

}