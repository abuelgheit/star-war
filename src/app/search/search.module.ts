import { SearchResultComponent } from './search-result/search-result.component';
import { SearchComponent } from './search-input/search.component';
import { PeopleService } from './../services/people.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatInputModule, MatIconModule, MatCardModule, MatListModule, MatPaginatorModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SearchPaginationComponent } from './search-pagination/search-pagination.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatPaginatorModule,
  ],
  declarations: [
   SearchComponent,
   SearchResultComponent,
   SearchPaginationComponent,
  ],
  exports: [
    SearchComponent,
    SearchResultComponent,
    SearchPaginationComponent,
  ],
  providers: [PeopleService],
})
export class SearchModule {}
