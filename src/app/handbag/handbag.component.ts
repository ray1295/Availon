import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-handbag',
  templateUrl: './handbag.component.html',
  styleUrls: ['./handbag.component.scss']
})
export class HandbagComponent implements OnInit {

  bagContents: number  = 0;
  noBagContent: string = "Your Bag Is Empty";

  // Method definition
  gethandBagContent() {
    return this.bagContents;
  };

  constructor() { 

  }

  ngOnInit() {
  }

}
