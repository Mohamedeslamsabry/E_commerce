import { ResolveFn } from '@angular/router';
import { CategoriesService } from './core/services/categories.service';
import { inject } from '@angular/core';

export const detailscatResolver: ResolveFn<boolean> = (route, state) => {
     
  const _CategoriesService=inject(CategoriesService);
  return  _CategoriesService.specificCategories(route.paramMap.get('idCat'));

};
