import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Product } from '../models/product';
import { OrderDetail } from '../models/order-detail';

@Injectable()
export class OrderService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private apiUrl = 'api/orderdetails';

    constructor(private http: Http) { }

    getProducts(): Promise<Product[]> {
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(r => r.json().data as OrderDetail[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    add(quantity: number, product: Product): Promise<OrderDetail> {
        return this.http
            .post(this.apiUrl, JSON.stringify({ product: product, quantity: quantity }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data as OrderDetail)
            .catch(this.handleError);
    }

    remove(product: Product): Promise<void> {
        const url = `${this.apiUrl}/${product.id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    getOrerSum(): Promise<number> {
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(r => {
                let data = r.json().data as OrderDetail[];
                let total: number = 0;

                data.forEach(s => {
                    for (var i = 0; i < data.length; i++) {
                        total += data[i].quantity * data[i].product.price;
                    }
                })

                return total;
            })
            .catch(this.handleError);
    }
}