import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./authentification/authentification-routing.module').then(m => m.AuthentificationRoutingModule),
  },
  {
    path: 'backoffice',
    loadChildren: () => import('./backoffice/backoffice-routing.module').then(m => m.BackofficeRoutingModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
