import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  allowAdditem = false;
  itemAddStatus = "No item was added";
  checkout:string = "Checkout out now!";
  itemName:string = "Shirt XL";

  // Method -> Returning a string
  getCheckout() {
    return this.checkout;
  }

  // Method -> 'On' identifies that it's triggered within template.
  onAddItem() {
    this.itemAddStatus = "Item " + this.itemName + "was added";
  }

  //Method -> Fetching the data in the input event.
  onUpdateItemList(event: Event) {
    // HTMLInputElement -> Informing TS about the type of html element will be of input element.
    this.itemName = (<HTMLInputElement>event.target).value;
  }

  constructor() {
    // Method -> Running function after given time. 
    setTimeout(() => {
      this.allowAdditem = true;
    }, 2000)
  }

  ngOnInit() {
  }

}
