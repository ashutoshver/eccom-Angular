import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../data-type';
import { ProductService } from '../share/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  menuType: string = 'default';
  sellerName: string = '';
  searchResult:undefined | product[];
  userName:string='';

  constructor(private route: Router, private product:ProductService) {}

  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          // console.log('inside seller');
          this.menuType = 'seller';
          if(localStorage.getItem('seller')){
            let sellerStore = localStorage.getItem('seller');
            let sellerData = sellerStore && JSON.parse(sellerStore)[0];
            this.sellerName = sellerData.name;
            this.menuType = 'seller'
          }
         }
        else if(localStorage.getItem('user')){
          let userStore = localStorage.getItem('user');
          // console.warn(userStore)
          let userData = userStore && JSON.parse(userStore);
          // console.log(userData)
          this.userName = userData.username;
          this.menuType = 'user';
        } 
        else {
          // console.log('outside seller');
          this.menuType = 'default';
        }
      }
    });
  }



  sellerlogout() {
    localStorage.removeItem('seller');
    this.route.navigate(['/']);
  }
  userLogout(){
    localStorage.removeItem('user');
    this.route.navigate(['/user-auth']);
  }
  searchProduct(query:KeyboardEvent){
    if(query){
      const element = query.target as HTMLInputElement;
      this.product.searchProducts(element.value).subscribe((result) =>{
        // console.log(result);
        if(result.length > 5){
          result.length = 5;
        }
        this.searchResult = result;
      })
    }

  }
  hideSearch(){
    this.searchResult = undefined;
  }

  submitSearch(val:string){
    // console.log(val)
    this.route.navigate([`search/${val}`])
  }
  redirectToDetails(id:number){
    this.route.navigate(['/details/'+id]);
  }
}
