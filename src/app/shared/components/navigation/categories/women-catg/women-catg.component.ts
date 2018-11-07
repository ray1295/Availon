import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-women-catg',
  templateUrl: './women-catg.component.html',
  styleUrls: ['./women-catg.component.scss']
})
export class WomenCatgComponent implements OnInit {

  womenModelPath: string = '/assets/images/kyle-smith-528234-unsplash.jpg';
  
  constructor() { }

  ngOnInit() {
  }

}
