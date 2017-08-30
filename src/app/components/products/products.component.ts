import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from './../../models/product';

import { ProductService } from './../../services/product.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  products: Product[];
  selectedProduct: Product;

  constructor(
    private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService
      .getProducts()
      .then(dataResult => this.products = dataResult);
  }

  onSelectProduct(product: Product): void {
    this.selectedProduct = product;
  }

  gotoDetail(): void {

    if (this.selectedProduct == null)
      return;
    
    this.router.navigate(['/product', this.selectedProduct.id]);
  }
}
