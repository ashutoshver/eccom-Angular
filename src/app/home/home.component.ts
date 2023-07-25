import { Component } from '@angular/core';
import { ProductService } from '../share/product.service';
import { product } from '../data-type';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  popularProducts:undefined | product[];
  trendyProduct: undefined | product[];
selectIndex: any;
  constructor(private product:ProductService){}
  ngOnInit():void{
    this.product.popularProducts().subscribe((result) =>{
      // console.warn(result)
      this.popularProducts = result;
    })
    this.product.trendyProducts().subscribe((result) =>{
      // console.log(result);
      this.trendyProduct = result;
    })
  }
}
