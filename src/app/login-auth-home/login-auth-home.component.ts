import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-auth-home',
  templateUrl: './login-auth-home.component.html',
  styleUrls: ['./login-auth-home.component.scss']
})
export class LoginAuthHomeComponent implements OnInit {
  welcomeMessage: string = "Welcome to Availon";
  adMessage: string = "home to the best a priced clothing lines";
  addToBag: boolean = false;

  // Method definition
  getAdMessage() {
    return this.adMessage;
  }

  // Method executed when componenrt is created by angular
  constructor() { 
    // Using ES6 arrow function 
    //  function() {}  === () => {}
    setTimeout(() => {
      this.addToBag = true;
    }, 2000);
  }

  ngOnInit() {
  }

}
