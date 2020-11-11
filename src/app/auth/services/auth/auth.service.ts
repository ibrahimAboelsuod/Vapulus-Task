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
export class AuthService implements CanActivate {
  constructor(private router: Router) {}

  public getIsAuthorized(): boolean {
    return !!localStorage.getItem('isAuthorized');
  }

  public canActivate(
    _route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const isAuthorized = this.getIsAuthorized();
    if (!isAuthorized) {
      this.router.navigate(['auth/login'], {
        queryParams: { returnUrl: state.url },
      });
    }
    return isAuthorized;
  }

  public login(_loginData: any): Observable<void> {
    return new Observable((observer) => {
      setTimeout(() => {
        localStorage.setItem('isAuthorized', 'true');
        observer.next();
      }, 250);
    });
  }

  public logout(): void {
    localStorage.clear();
  }
}
