import { Routes } from '@angular/router';

export const collectionRoutes: Routes = [
  {
    path: 'collection',
    loadComponent: () =>
      import('./component/collection.component').then(
        (m) => m.CollectionComponent
      ),
  },
  {
    path: 'collection/:type',
    loadComponent: () =>
      import('./component/collection.component').then(
        (m) => m.CollectionComponent
      ),
  },
];
