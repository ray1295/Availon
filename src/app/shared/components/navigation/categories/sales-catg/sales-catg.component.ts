import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-catg',
  templateUrl: './sales-catg.component.html',
  styleUrls: ['./sales-catg.component.scss']
})
export class SalesCatgComponent implements OnInit {

  salesModelPath1: string = '/assets/images/carol-oliver-651059-unsplash.jpg';
  salesModelPath2: string = '/assets/images/dom-hill-512919-unsplash.jpg';
  salesModelPath3: string = '/assets/images/kyle-smith-528234-unsplash.jpg';

  constructor() { }

  ngOnInit() {
  }

}
