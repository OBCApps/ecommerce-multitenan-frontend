import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { AuthInterceptor } from './pages/shared/global-components/authorization/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),  // Llamado de rutas

    { provide: LocationStrategy, useClass: HashLocationStrategy }, // Activar Hash (#)

    provideClientHydration(),

    provideHttpClient(withInterceptorsFromDi(), withFetch()),

    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ]
};
