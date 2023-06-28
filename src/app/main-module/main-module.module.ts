import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { MainTableComponent } from './main-table/main-table.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { MinutesConverterPipe } from '../pipes/minutes-converter.pipe';
import { DateConverterPipe } from '../pipes/date-converter.pipe';
import { RatingConverterPipe } from '../pipes/rating-converter.pipe';
import { GenresConverterPipe } from '../pipes/genres-converter.pipe';

@NgModule({
  declarations: [
    MainTableComponent,
    MovieFormComponent,
    SearchBarComponent,
    AdvancedSearchComponent,
    MinutesConverterPipe,
    DateConverterPipe,
    RatingConverterPipe,
    GenresConverterPipe
  ],
  imports: [
    CommonModule,
    MainModuleRoutingModule,
    NzTableModule,
    NzPaginationModule,
    NzButtonModule,
    NzIconModule,
    NzModalModule,
  ]
})
export class MainModuleModule { }
