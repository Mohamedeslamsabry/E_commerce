import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, Renderer2, RendererFactory2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class MytranslationService {
  private readonly _TranslateService=inject(TranslateService);
  private readonly _PLATFORM_ID=inject(PLATFORM_ID);
  private readonly _Renderer2=inject(RendererFactory2).createRenderer(null,null)  


  constructor(){
    if(isPlatformBrowser(this._PLATFORM_ID)){
      this._TranslateService.setDefaultLang('en')
       this.setlang();
    }
   
  }

  
  setlang():void{
    let saveLang=localStorage.getItem('lang')
     //! Use
    if(saveLang!==null){
      this._TranslateService.use(saveLang)
    }
     //! direction
    if(localStorage.getItem('lang')==='en'){
      this._Renderer2.setAttribute( document.documentElement,'dir','ltr')
      this._Renderer2.setAttribute( document.documentElement,'lang','en')
      document.documentElement.dir='ltr'
    }
    else if (localStorage.getItem('lang') === 'ar') {
      this._Renderer2.setAttribute( document.documentElement,'dir','rtl')
      this._Renderer2.setAttribute( document.documentElement,'lang','ar')
    }

  }


  selectlang(lang : string):void {
    localStorage.setItem('lang'  , lang);
    this.setlang();
 }



}
