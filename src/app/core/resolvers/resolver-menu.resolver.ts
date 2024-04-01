import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { MenuService } from '@service/menu.service';
import { map } from 'rxjs';

export const resolverMenuResolver: ResolveFn<boolean> = (route, state) => {
  const menuService = inject(MenuService);
  return menuService.getAllMenus().pipe(
       map(() => true)
  );
};
