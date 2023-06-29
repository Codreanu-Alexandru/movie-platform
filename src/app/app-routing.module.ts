import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in-module/log-in/log-in.component';
import { AuthGuard } from './guards/auth.guard';
import { RegisterFormComponent } from './register-module/register-form/register-form.component';


const routes: Routes = [
  {
    path: 'login-form',
    loadChildren: () => import('./log-in-module/log-in.module').then(m => m.LogInModule)
  },
  {
    path: 'register-form',
    loadChildren: () => import('./register-module/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'register', component: RegisterFormComponent
  },
  {
    path: '', component: LogInComponent
  },
  {
    path: 'main-table',
    loadChildren: () => import('./main-module/main-module.module').then(m => m.MainModuleModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
