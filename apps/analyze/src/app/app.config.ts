import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter([
      {
        path: '',
        loadComponent: () => import('./pages/home/analyze-home.component').then(m => m.AnalyzeHomeComponent),
      },
    ]),
    { provide: APP_BASE_HREF, useValue: '/analyze' },
  ],
};
