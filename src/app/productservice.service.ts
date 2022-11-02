import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Product {
  id?: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: any;
  rating: any;
}

@Injectable({
  providedIn: 'root',
})
export class ProductserviceService {
  products: Product[] = [];
  constructor(private http: HttpClient) {}
  private baseURL = 'https://fakestoreapi.com';
  getProduct(id: number) {
    return this.http.get(this.baseURL + '/products/' + id);
  }
}
