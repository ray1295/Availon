import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})

export class CheckoutComponent {

  username: string = "";
  userLive: boolean = false;
  allowAdditem = false;
  itemAddStatus = "No item was added";
  checkout: string = "Checkout out now!";
  itemName: string = "Shirt XL";

  // Method -> Returning a string.
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

  //Method -> Enable button when username not empty.
  onUsernameLive() {
    if (this.username !== "")
      return this.userLive = true;
  }

  // Method -> Reset username to empty string.
  userReset() {
    return this.username = "";
  }

  constructor() {
    // Method -> Running function after given time. 
    setTimeout(() => {
      this.allowAdditem = true;
    }, 2000)
  }
}
