import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  
  itemWish:string = '';
  addWish:boolean = false;
  wishStatus: string = 'empty';
  items = ['Shoes', 'Shirt'];

  // Built in method -> called once component is created
  constructor() { 
    this.wishStatus = Math.random() > 0.5 ? 'item' : 'empty';
  }

  // Method -> Color depeneding on wishStatus
  getColor() {
    return this.wishStatus === 'item' ? 'green' : 'red';
  }

  // Method -> 
  onAddWish() {
    if (this.itemWish !== '')
      return true;
  }

  ngOnInit() {
  }

}
