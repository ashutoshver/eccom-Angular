import { inject, Injectable } from '@angular/core';
import {Router} from '@angular/router'
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { SellerServiceService } from './seller-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private sellerService: SellerServiceService, private router:Router) {}
  canActivate(): boolean {
    if (this.sellerService.isSellerLoggedIn) {
      if (localStorage.getItem('seller')) {
        return true
      }
      return true
    }else{
      return false
    }
    
  }
}

export const IsAuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean => {
  return inject(AuthGuard).canActivate();
};