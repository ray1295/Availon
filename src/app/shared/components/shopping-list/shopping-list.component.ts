import { Component, OnInit } from '@angular/core';
import { Items } from '../../../shared/models/items';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  // Item == Ingredients
  items: Items[] = [
    // Constructor -> Using Items constructor 
    new Items('Nike', 5),
    new Items('Adidas', 10),
  ];

  constructor() { }

  ngOnInit() {
  }

}
