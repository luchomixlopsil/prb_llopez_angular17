import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import {  of, tap } from 'rxjs';

export const menusSecurityGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
   const canAccessToMenu = localStorage.getItem('CanAccessToMenu') === '0';

  return of(canAccessToMenu).pipe(
    tap((canAccessToMenu) => {
      if (!canAccessToMenu) {
        router.navigateByUrl('/login');
      }
    })
  );
};