import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  display:boolean = true;
  clicks = [];
  count:number = 0;

  onButtonClicked() {
    // Toggle function
    this.display = !this.display;
    this.count++;
    // Log all button clicks in an array
    this.clicks.push(this.count);
  }

  constructor() { }

  ngOnInit() {

  }

}
