import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Product } from './../../models/product';
import { ProductService } from './../../services/product.service';

@Component({
    selector: 'product-detail',
    templateUrl: '../product-detail/product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {
    @Input() product: Product;

    constructor(
        private productService: ProductService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            console.log(params);
        });

        this.route.paramMap
            .switchMap((params: ParamMap) => {
                return this.productService.getProduct(params.get('id'))
            })
            .subscribe(s => this.product = s);
    }

    goBack(): void {
        this.location.back();
    }
}