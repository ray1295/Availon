import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../shared/models/products';

@Component({ 
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  // Types -> Using created model (Product -> array of products) as type -> What gets sgtored in products property is an array of product objects
  products: Product[] = [
    new Product ('A test Product.', 'This is a test.', 'https://www.star2.com/wp-content/uploads/2017/04/str2_s8modelONLINE_williamkee-770x470.jpg', 'Test', 'Test')
  ];

  constructor() { }

  ngOnInit() {
  }

}
