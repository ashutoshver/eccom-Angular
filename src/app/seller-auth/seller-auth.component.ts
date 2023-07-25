import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { signUp } from '../data-type';
import { SellerServiceService } from '../share/seller-service.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
  constructor(private sellerService:SellerServiceService, private router:Router){}
showLogin = false;
authError:string = '';
  ngOnInit():void
{
  this.sellerService.reloadSeller()
}
 
signUp(data:signUp):void
  {
  //  console.log(data)
   this.sellerService.sellerSignUp(data)
    
  }

  Login(data:signUp):void
  {
    // console.log(data)
    this.authError = "";
    this.sellerService.sellerLogin(data)
    this.sellerService.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError = 'Email or Password is Invalid'
      }
    })
  }
 
  openLogin()
  {
    this.showLogin = true;
  }
  openSignUp()
  {
    this.showLogin = false
  }
}
