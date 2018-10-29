import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newin-cat',
  templateUrl: './newin-cat.component.html',
  styleUrls: ['./newin-cat.component.scss']
})
export class NewinCatComponent implements OnInit {

  newInModelPath1: string = '/assets/images/carol-oliver-651059-unsplash.jpg';
  newInModelPath2: string = '/assets/images/dom-hill-512919-unsplash.jpg';
  newInModelPath3: string = '/assets/images/kyle-smith-528234-unsplash.jpg';
  hasBackdrop: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
