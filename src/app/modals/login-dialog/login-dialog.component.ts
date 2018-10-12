import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserData } from "../../login/login.component";

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  // styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

  loginModalPath: string = '/assets/images/availon_poster.png';
  hide = true;

  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserData) { }

    onCloseCancel(): void {
      this.dialogRef.close();
    }

    onCloseConfirm(): void {
      
    }

  ngOnInit() {
  }

}
