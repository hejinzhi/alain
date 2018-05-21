import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { TokenService } from '@delon/auth';

@Injectable()
export class RoutesGuard implements CanActivate {
  constructor(private router: Router, private tokenService: TokenService) {}

  canActivate() {
    const expires = this.tokenService.get().expires || 0;
    const now = new Date().getTime();
    console.log(expires, now);
    if (now - 60 * 1000 >= expires) {
      this.router.navigate(['passport/login']);
      return false;
    } else {
      return true;
    }
  }
}
