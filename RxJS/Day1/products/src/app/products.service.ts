import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private _HttpClient: HttpClient) {}

  intervalOb = interval(1000);

  getProducts() {
    return this._HttpClient.get('https://dummyjson.com/products');
  }
}
