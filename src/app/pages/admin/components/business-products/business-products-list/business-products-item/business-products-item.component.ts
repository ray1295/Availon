import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../../../../shared/services/products/products.service';

@Component({
  selector: 'app-business-products-item',
  templateUrl: './business-products-item.component.html',
  styleUrls: ['./business-products-item.component.scss']
})
export class BusinessProductsItemComponent implements OnInit {

  product: string;
  editProduct: string;
  
  // Dependency Injection -> INjecting the service. 
  constructor(private productsService:ProductsService) { }

  // subscribe() method -> Subscribing to the cast observable so anytime theres a change it is synced with the shoppoing-list component.
  ngOnInit() {
    this.productsService.cast.subscribe(product => this.product = product)
  }

  editTheProduct() {
    this.productsService.editProduct(this.editProduct)
  }

}
