import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const guardBlankGuard: CanActivateFn = (route, state) => {
  const _Router=inject(Router)
  
  const _Id=inject(PLATFORM_ID)


  if(isPlatformBrowser(_Id)){
    if(localStorage.getItem('uToken')){
      return true;
    }
    else{
       _Router.navigate(['/login'])
      return false;
    }
    
  }


  else{
    return false;
  }

};
