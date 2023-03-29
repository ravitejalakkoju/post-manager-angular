import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class UserIdGuard implements CanActivate {
  constructor(private usersService: UsersService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise(resolve => {
      const userId = Number(route.paramMap.get('id'));
      this.usersService.getUser(userId).subscribe(user => {
        if(user) {
          resolve(true);
        }
        else {
          this.router.navigate(['/']).then(() => window.location.reload());
          resolve(false);
        }
      }, error => {
        this.router.navigate(['/']).then(() => window.location.reload());
        resolve(false);
      })
    })
  }
}
