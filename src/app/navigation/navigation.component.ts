import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  // styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  logoPath: string = '/assets/images/availon_text_logo.png';
  countryPath: string = '/assets/images/england_logo.png';

  constructor() { }

  ngOnInit() {
    // let message: string = "Hello World";

    // function log(message) {
    //   console.log(message);
    // }
    // log(message);
  }
}
