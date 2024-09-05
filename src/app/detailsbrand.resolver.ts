import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { BrandsService } from './core/services/brands.service';

export const detailsbrandResolver: ResolveFn<boolean> = (route, state) => {
     
  const _BrandsService=inject(BrandsService);
  return  _BrandsService.specificBrands(route.paramMap.get('idbrand'));
  
};
