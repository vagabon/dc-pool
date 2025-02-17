import { Routes } from '@angular/router';
import { collectionRoutes } from './collection/collection.routes';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pool/component/pool.component').then((m) => m.PoolComponent),
  },
  ...collectionRoutes,
];
