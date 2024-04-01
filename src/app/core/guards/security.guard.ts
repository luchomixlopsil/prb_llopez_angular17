import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import {  of, tap } from 'rxjs';

export const securityGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  return of(isAuthenticated).pipe(
    tap((isAuthenticated) => {
      if (!isAuthenticated) {
        router.navigateByUrl('/login');
      }
    })
  );
};
