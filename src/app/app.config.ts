import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"game-liberty","appId":"1:76232558639:web:7dca62c97b168761dc5eda","storageBucket":"game-liberty.appspot.com","apiKey":"AIzaSyB1NgFvrJ7tf8aVko_ZtPVyEg97pWMLPhc","authDomain":"game-liberty.firebaseapp.com","messagingSenderId":"76232558639","measurementId":"G-CG0PRQ69K6"})), provideFirestore(() => getFirestore()), provideAnimationsAsync()]
};
