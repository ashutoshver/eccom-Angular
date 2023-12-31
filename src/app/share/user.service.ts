import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { login, signUp } from '../data-type';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // useremail:any;
  // userpassword:any;
  constructor(private http: HttpClient, private route: Router) {}

  userSignUp(user: signUp) {
    this.http
      .post('https://eccom-angular.onrender.com/users', user, { observe: 'response' })
      .subscribe((result) => {
        // console.warn(result)
        if (result) {
          localStorage.setItem('user', JSON.stringify(result.body));
          this.route.navigate(['/']);
        }
      });
  }

  userLogin(data:any) {
    // console.warn(data)
  
    this.http
      .get<signUp[]>(
        `https://eccom-angular.onrender.com/users?email=${data.email}&password=${data.password}`,
        { observe: 'response' }
      )
      .subscribe((result:any) => {
        if (result && result.body) {
          console.warn(result)
          localStorage.setItem('user', JSON.stringify(result.body[0]));
          this.route.navigate(['/']);
        }
      });
  }
  // userAuthReload() {
  //   if (localStorage.getItem('user')) {
  //     this.route.navigate(['/']);
  //   }
  // }
}
