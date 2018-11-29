import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../../shared/models/products';

@Component({
  selector: 'app-business-products-list',
  templateUrl: './business-products-list.component.html',
  styleUrls: ['./business-products-list.component.scss']
})
export class BusinessProductsListComponent implements OnInit {


  products: Product[] = [
    new Product('Name Test', 'Category Test', 'Description Test', '../../../../../assets/images/sharon-garcia-486594-unsplash.jpg', 'Price Test'  ),
    new Product('Name Test', 'Category Test', 'Description Test', '../../../../../assets/images/sharon-garcia-486594-unsplash.jpg', 'Price Test'  )
  ];

  constructor() { }

  ngOnInit() {
  }

}
