import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserData } from '../../../components/login/login.component';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthenticationService } from "../../services/authentication/authentication.service";
import { Router } from '@angular/router'
declare const gapi: any

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  // styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit, AfterViewInit {


  googleSignIn: string = '/assets/images/google-favicon-512.png';
  loginForm: FormGroup;
  loginModalPath: string = '/assets/images/nathan-dumlao-483394-unsplash.jpg';
  hide = true;

  public auth2: any;
  public googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: "963709671566-hk03jq88bfeiei6h1m3nk2uj2oqna8l9.apps.googleusercontent.com",
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSignin(document.getElementById('googleBtn'));
    });
  }
  public attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {

        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
        //YOUR CODE HERE


      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }

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

  renderButton() {
    gapi.render('googleBtn', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      // 'onsuccess': onSuccess,
      // 'onfailure': onFailure
    });
  }

  signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }

  // dialogRef.afterClosed().subscribe(result => {
  //   this.user = result;
  // });

  ngOnInit() { }

  ngAfterViewInit() {
    this.googleInit();
  }

}
