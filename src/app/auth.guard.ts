import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ToastService } from './services/toast/toast.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private toastService: ToastService,
    ) { }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('tokenGuentai')) {
      return true;
    } else {
      this.toastService.warning({ mensagem: 'Não autenticado!' });
      this.router.navigate(['/login']);
      return false;
    }
  }
}
