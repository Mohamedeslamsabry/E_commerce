import { errorInterceptor } from './core/intercptors/error.interceptor';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClient, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { myheadrsInterceptor } from './core/intercptors/myheadrs.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { loadingInterceptor } from './core/intercptors/loading.interceptor';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withViewTransitions() ,withInMemoryScrolling({scrollPositionRestoration:'top'}) ), provideClientHydration(),
    provideHttpClient(withFetch()  ,withInterceptors([myheadrsInterceptor,errorInterceptor,loadingInterceptor]) ),
    provideAnimations(),
    provideToastr(), // Toastr providers
    importProvidersFrom( NgxSpinnerModule,
      TranslateModule.forRoot({
        defaultLanguage:'en',
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        
        }
      })
    )
  ]
};
