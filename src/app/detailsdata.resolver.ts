import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ProductService } from './core/services/product.service';

export const detailsdataResolver: ResolveFn<boolean> = (route, state) => {
   
   const _ProductService=inject(ProductService);
   return  _ProductService.SubseficProduct(route.paramMap.get('id'));


 
};
