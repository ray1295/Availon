import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  
  itemWish:string = '';
  addWish:boolean = false;

  // Built in method -> called once component is created
  constructor() { 
    this.itemWish = Math.random() > 0.5 ? 'online' : 'offline'
  }

  onAddWish() {
    if (this.itemWish !== '')
      return true;
  }

  ngOnInit() {
  }

}
