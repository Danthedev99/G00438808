import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'Recipes',
    loadComponent: () => import('./Recipes/g00438808/g00438808.page').then( m => m.G00438808Page)
  },

];
