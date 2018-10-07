import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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

  constructor(private dialog: MatDialog) {
    // openDialog(): void {
    //   const dialogRef = this.open(RegisterComponent, {
    //     width: '400px',
    //     data: {
    //       user: this.user,
    //       email: this.email,
    //       name: this.name,
    //       password: this.password,
    //       passwordConfirmation: this.passwordConfirmation,
    //     }
    //   }); 

    //   dislogRef.afterClosed().subscribe(result => {
    //     this.user = result
    //   });
    // }
   }

  ngOnInit() {
  }

}
