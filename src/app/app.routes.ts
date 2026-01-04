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
  {
  path: 'details/:id',
  loadComponent: () => import('./Recipes/details/details.page').then(m => m.DetailsPage)
},
  {
    path: 'settings',
    loadComponent: () => import('./settings/settings.page').then( m => m.SettingsPage)
  },
  {
    path: 'favourites',
    loadComponent: () => import('./favourites/favourites.page').then( m => m.FavouritesPage)
  }


  //routes stored here for all the paths required details, settings, home ,etc
];
