import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterLink, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoginService } from '../shared/services/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.loginService.isLogged()) {
      return true;
    }

    alert('You dont have permissions');

    this.router.navigate(['/login']);

    return false;
  } 
}
