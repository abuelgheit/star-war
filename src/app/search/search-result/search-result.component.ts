import { AppState } from './../../app.state';
import { SearchResponse } from './../../models/searchRes';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Person } from '../../models/person';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  people: Observable<SearchResponse>;
  count: number;
  results: Person[];

  constructor(
    private store: Store<AppState>,
  ) {
    this.people = store.select('people');
    this.people.subscribe(
      res => {
        this.count = res.count;
        this.results = res.results;
      }
    );
  }

  ngOnInit() {
  }

}
