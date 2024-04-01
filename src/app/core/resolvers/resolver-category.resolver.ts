import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { CategoriesServices } from '@service/categories.service';
import { map } from 'rxjs';

export const resolverCategoryResolver: ResolveFn<boolean> = (route, state) => {
  const categoryService = inject(CategoriesServices);
  return categoryService.getAllCategories().pipe(
       map(() => true)
  );
};
