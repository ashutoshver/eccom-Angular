import { Component } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../share/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css'],
})
export class SellerAddProductComponent {
  addProductMessage: string | undefined;
  constructor(private product: ProductService) {}
  
  submitProduct(data: product) {
    this.product.addProduct(data).subscribe((result) => {
      if(result){
        this.addProductMessage = "Product is successfully added";
        console.warn(result);
      }
      setTimeout(()=>this.addProductMessage = undefined,3000)
    });
  }
}
