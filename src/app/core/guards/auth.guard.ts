import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const _Router = inject(Router);
  const _id = inject(PLATFORM_ID);

  if (isPlatformBrowser(_id)) {
    if (localStorage.getItem('uToken')) {
      _Router.navigate(['/home']);
      return false;
    } 
    
    else
    {
      return true;
    }
    
  }
  
  else {
    return false;
  }
};
