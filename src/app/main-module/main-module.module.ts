import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { MainTableComponent } from './main-table/main-table.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';


@NgModule({
  declarations: [
    MainTableComponent,
    MovieFormComponent,
    SearchBarComponent,
    AdvancedSearchComponent
  ],
  imports: [
    CommonModule,
    MainModuleRoutingModule
  ]
})
export class MainModuleModule { }
