import { Component } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../share/product.service';
import {faTrash,faEdit} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css'],
})
export class SellerHomeComponent {
  productList: undefined | product[];
  deleteMessage: undefined | string;
  iconDel = faTrash;
  iconEdit = faEdit;

  constructor(private product: ProductService) {}

  ngOnInit(): void {
  this.list();
  }
  deleteProduct(id: number) {
    console.log('id is', id);
    this.product.deleteProduct(id).subscribe((result) => {
      if (result) {
        this.deleteMessage = 'Product is deleted';
        this.list();
      }
      setTimeout(() => (this.deleteMessage = undefined), 3000);
    });
  }
  list()
  {
    this.product.productList().subscribe((result) => {
      // console.warn(result)
      if (result) {
        this.productList = result;
      }
    });
  }
}
