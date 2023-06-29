import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainTableComponent } from './main-table/main-table.component';
import { MovieFormComponent } from './movie-form/movie-form.component';

const routes: Routes =
  [
    {
      path: '',
      component: MainTableComponent
    },
    {
      path: 'add',
      component: MovieFormComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoutingModule { }
