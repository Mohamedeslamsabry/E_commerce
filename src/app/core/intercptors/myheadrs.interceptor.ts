import { HttpInterceptorFn } from '@angular/common/http';

export const myheadrsInterceptor: HttpInterceptorFn = (req, next) => {


  if(req.url.includes('cart')||req.url.includes('wishlist')){
    if(localStorage.getItem('uToken')!==null){
      req=req.clone({
        setHeaders:{token:localStorage.getItem('uToken')!}
       })
    }
  }
  return next(req);
};
