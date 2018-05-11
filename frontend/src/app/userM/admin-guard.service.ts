import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

@Injectable()
export class AdminGuardService implements CanActivate{

  constructor(private authService: AuthenticationService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log(this.authService.user$.getValue());
    if (this.authService.user$.getValue() && this.authService.user$.getValue().isAdmin) {
      return true;
    }

    // Retain the attempted URL for redirection
    this.authService.redirectUrl = state.url;
    this.router.navigate(['/login']);
    return false;
  }


}
