import { HttpClientModule } from '@angular/common/http';
import { SearchModule } from './search/search.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { peopleReducer } from './ngrx/people.reducer';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatPaginatorModule,
    StoreModule.forRoot({ people: peopleReducer }),
    SearchModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}