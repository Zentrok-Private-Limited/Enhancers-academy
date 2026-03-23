import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),

    // ✅ IMPORTANT ADDITION
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',   // scroll to #id
        scrollPositionRestoration: 'enabled' // optional (back button scroll)
      })
    )
  ]
};