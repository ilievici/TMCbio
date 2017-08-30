import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';


import { Product } from '../models/product';

@Injectable()
export class ProductService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private apiUrl = 'api/products';

  constructor(private http: Http) { }

  getProducts(): Promise<Product[]> {
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(r => r.json().data as Product[])
      .catch(this.handleError);
  }

  getProduct(id: string): Promise<Product> {
    const url = `${this.apiUrl}/${id}`;

    console.log(id);

    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Product)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('MY_ERROR: ', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}