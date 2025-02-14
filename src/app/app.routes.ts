import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pool/component/pool.component').then((m) => m.PoolComponent),
  },
];
