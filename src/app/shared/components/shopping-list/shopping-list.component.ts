import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/products';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  products: Product[] = [];
  product: string;

  // Dependency Injection -> INjecting the service. 
  constructor(private productsService:ProductsService) { }

  // subscribe() method -> Subscribing to the cast observable so anytime theres a change it is synced with the shoppoing-list component.
  ngOnInit() {
    this.productsService.cast.subscribe(product => this.product = product)
  }

}
