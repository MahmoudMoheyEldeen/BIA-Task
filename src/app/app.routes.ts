import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app/main-content/main-content.module').then(
        (m) => m.MainContentModule
      ),
  },
];
