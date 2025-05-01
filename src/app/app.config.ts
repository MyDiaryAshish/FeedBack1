import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
// Firebase imports
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environment } from '../environments/environment';
//Animation lottie
import { provideLottieOptions } from 'ngx-lottie';
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    // ✅ Provide Firebase App
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),

    // ✅ Provide Auth service (this was missing!)
    provideAuth(() => getAuth()),

    //lottie-web animation
    provideLottieOptions({
      player: () => import('lottie-web'),
    })
  ]
};
