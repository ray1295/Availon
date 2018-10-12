import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-men-catg',
  templateUrl: './men-catg.component.html',
  styleUrls: ['./men-catg.component.scss']
})
export class MenCatgComponent implements OnInit {

  menModelPath: string = '/assets/images/joe-robles-602630-unsplash.jpg';
  constructor() { }

  ngOnInit() {
  }

}
