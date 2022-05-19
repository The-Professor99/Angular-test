import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  accountsKey = 'user-account-angular-test';

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const account = localStorage.getItem(this.accountsKey);
    if (account) {
      return true;
    }

    this.router.navigate(['/account/login'], {
      queryParams: { returnUrl: state.url },
    });
    return false;
  }
}
