import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // Importe o provideHttpClient
import { routes } from './app.routes';
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(), // Fornece o HttpClient para a aplicação
    provideRouter(routes) // Fornece as rotas da aplicação
  ]
};
