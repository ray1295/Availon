import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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
  openDialog() {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '400px',
      data: {
        user: this.user,
        email: this.email,
        name: this.name,
        password: this.password,
        passwordConfirmation: this.passwordConfirmation,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.user = result
    });
  }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register.component.html',
})
export class RegisterComponentDialog {

  constructor(
    public dialogRef: MatDialogRef<RegisterComponentDialog>,
    @Inject(MAT_DIALOG_DATA) public data: UserData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
