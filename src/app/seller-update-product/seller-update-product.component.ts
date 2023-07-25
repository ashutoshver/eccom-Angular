import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../data-type';
import { ProductService } from '../share/product.service';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent {

  productData:undefined | product;
  productMessage:undefined | string;

  constructor(private route: ActivatedRoute, private productUpdate: ProductService){}

  ngOnInit():void{
    let productId = this.route.snapshot.paramMap.get('id');
    console.log(productId)
    productId && this.productUpdate.getProduct(productId).subscribe((result) =>{
      console.log(result)
      this.productData = result;
    })
  }

  submitUpdateProduct(data:product)
  {
    console.log(data)
    if(this.productData){
      data.id = this.productData.id;
    }
    this.productUpdate.updateProduct(data).subscribe((result) =>{
      if(result){
        this.productMessage = "Product has updated"
      }
    });
    setTimeout(()=>{
      this.productMessage = undefined
    },3000)
  }

}
