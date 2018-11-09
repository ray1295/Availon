import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserData } from '../../../components/login/login.component';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthenticationService } from "../../services/authentication/authentication.service";
import { Router } from '@angular/router'

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  // styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

  loginForm: FormGroup;
  loginModalPath: string = '/assets/images/availon_poster.png';
  hide = true;

  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>,
    private auth: AuthenticationService,
    private route: Router,
    @Inject(MAT_DIALOG_DATA) public data: UserData) {
    this.loginForm = new FormGroup({
      email: new FormControl('',
        Validators.compose(
          [Validators.required,
          Validators.email
          ])),
      password: new FormControl('',
        Validators.required),
    })
  }

  onCloseCancel(): void {
    this.dialogRef.close();
  }

  onSubmitLogin(): void {
    this.auth.loginUser().subscribe(
      (response) => {
        for (let i = 0; i < response["user"].length; i++) {
          if (this.loginForm.value.email === response["user"][i].email) {
            this.route.navigate(["/home"]);
            this.dialogRef.close();
          }
        }
      }
    )
  }

  // dialogRef.afterClosed().subscribe(result => {
  //   this.user = result;
  // });

  ngOnInit() { }

}
