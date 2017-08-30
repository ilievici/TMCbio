import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Product } from './../../models/product';
import { OrderDetail } from './../../models/order-detail';

import { ProductService } from './../../services/product.service';
import { OrderService } from './../../services/order.service';
import { TranslateService } from './../../translate/translate.service';

@Component({
  selector: 'order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {
  payMethods = [];
  products: Product[];
  totalOrderSum: number;
  totalShippingStr: string;
  orderedDetails: OrderDetail[];

  shippingPercent: number = 5;
  freeShippingSumm: number = 5000;

  client = { name: '', email: '', phone: '' };  
  address = { city: '', street: '', payMethod: this.translateService.translate('Cash') };

  constructor(
    private translateService: TranslateService,
    private productService: ProductService,
    private orderService: OrderService,
    private router: Router) { }

  ngOnInit(): void {
    this.orderedDetails = [];
    this.totalOrderSum = 0;
    this.totalShippingStr = "0";

    this.payMethods.push(this.translateService.translate('Cash'));
    this.payMethods.push(this.translateService.translate('Invoice'));

    this.updateOrderSum();
    this.getProducts();
  }

  getProducts(): void {
    this.productService
      .getProducts()
      .then(dataResult => this.products = dataResult);
  }

  updateOrderSum(): void {
    this.orderService.getOrerSum()
      .then(total => {
        this.totalOrderSum = total;

        if (total >= this.freeShippingSumm)
          this.totalShippingStr = this.translateService.translate('Free');
        else {
          if (total != 0) {
            let shippingSum: number = (total * this.shippingPercent / 100);

            let shipping: string = shippingSum.toString() + " " + this.translateService.translate('MDL') + " (" + this.shippingPercent.toString() + "%)";
            this.totalShippingStr = shipping;

            this.totalOrderSum += shippingSum;
          }
          else
            this.totalShippingStr = "0";
        }
      });
  }

  selectQuantity(quantity: number, product: Product) {
    product.totalPay = product.price * quantity;

    if (quantity <= 0) {
      this.orderService.remove(product)
        .then(detail => {
          this.updateOrderSum()
        });
      return;
    }

    this.orderService.add(quantity, product)
      .then(detail => {
        this.orderedDetails.push(detail);
        this.updateOrderSum()
      });
  }
}
