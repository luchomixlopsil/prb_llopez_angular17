import { Routes } from '@angular/router';
import { CategoriesServices } from '@service/categories.service';
import { resolverCategoryResolver } from '../../core/resolvers/resolver-category.resolver';
import { MenuService } from '@service/menu.service';
import { resolverMenuResolver } from '../../core/resolvers/resolver-menu.resolver';
import { menusSecurityGuard } from '@guard/menus-security.guard';

const routes: Routes = [
    {
        path: 'categories',
        loadComponent: () => import('../../views/categories/categories.component').then((m) => m.CategoriesComponent),
        providers: [CategoriesServices],
        resolve: { categories: resolverCategoryResolver }
    },
    {
        path: 'categories/:id',
        loadComponent: () => import('../../views/categories/categories.component').then((m) => m.CategoriesComponent),
        providers: [CategoriesServices],
        resolve: { categories: resolverCategoryResolver }
    },
    {
        path: 'customers',
        loadComponent: () => import('../../views/customers/customers.component'),
    },
    {
        path: 'menu',
        loadComponent: () => import('../../views/menu/menu.component').then((m) => m.MenuComponent),
        providers: [MenuService],
        resolve: { menu: resolverMenuResolver },
        canActivate : [menusSecurityGuard]
    },
    {
        path: 'menu/:id',
        loadComponent: () => import('../../views/menu/menu.component').then((m) => m.MenuComponent),
        providers: [MenuService],
        resolve: { menu: resolverMenuResolver }
    },
    {
        path: 'orders',
        loadComponent: () => import('../../views/orders/orders.component'),
    },
    {
        path: '',
        redirectTo: 'categories',
        pathMatch: 'full'
    },
];

export default routes; 