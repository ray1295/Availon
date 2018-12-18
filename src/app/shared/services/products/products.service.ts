// Services are a way to share information among components that don't know each other.
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // BehaviourSubject -> Will return upon subscription the last value of the stream, or an initial state if no value was emmited yet.
  // _product -> Property thats going to be shared. Type String. Default value ('Product Test').
  private _product = new BehaviorSubject<string>('Product Test');

  // Cast-> Broadcasting message as an observables.
  cast = this._product.asObservable();

  constructor() { }

  // Next() method -> Replace the value of _product.
  editProduct(newProduct) {
    this._product.next(newProduct);
  }
}
