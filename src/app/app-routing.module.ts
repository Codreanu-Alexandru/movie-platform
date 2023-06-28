import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./log-in-module/log-in.module').then(m => m.LogInModule)
  },
  {
    path: '',
    loadChildren: () => import('./main-module/main-module.module').then(m => m.MainModuleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
