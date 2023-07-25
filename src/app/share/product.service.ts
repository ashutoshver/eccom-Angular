import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../data-type';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  //For Adding product in list: Post
  addProduct(data: product) {
    return this.http.post('http://localhost:3000/products', data);
  }

  //For Adding product in list: GET
  productList() {
    return this.http.get<product[]>('http://localhost:3000/products');
  }
  //For deleting any product List
  deleteProduct(id: number) {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }

  //For update Product
  getProduct(id: string) {
    return this.http.get<product>(`http://localhost:3000/products/${id}`);
  }

  //update product
  updateProduct(product: product) {
    return this.http.put<product>(
      `http://localhost:3000/products/${product.id}`,
      product
    );
  }
  //home slider
  popularProducts() {
    return this.http.get<product[]>('http://localhost:3000/products?_limit=6');
  }

  //Trendy Products
  trendyProducts() {
    return this.http.get<product[]>('http://localhost:3000/products?_limit=8');
  }

   //Search Products
   searchProducts(query:string) {
    return this.http.get<product[]>(`http://localhost:3000/products?q=${query}`);
  }

}
