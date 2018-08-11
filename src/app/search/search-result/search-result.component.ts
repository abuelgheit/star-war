import { AppState } from './../../app.state';
import { SearchResponse } from './../../models/searchRes';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Person } from '../../models/person';
import { DndDropEvent } from 'ngx-drag-drop';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  people: Observable<SearchResponse>;
  count: number;
  results: Person[];

  draggable = {
    data: "myDragData",
    effectAllowed: "move",
    disable: false,
    handle: false
  };

  first: number;
  second: number;

  constructor(
    private store: Store<AppState>,
  ) {
    this.people = store.select('people');
    this.people.subscribe(
      res => {
        if (res) {
          this.count = res.count;
          this.results = res.results;
        }
      }
    );
  }

  ngOnInit() {}

  
  onDraggableMoved(event) {
    this.first = event;
    if (this.first > this.second) {
      this.results.splice(this.second, 0, this.results[this.first]);
      this.results.splice(this.first+1, 1);
    } else {
      this.results.splice(this.second+1, 0, this.results[this.first]);
      this.results.splice(this.first, 1);
    }
  }
      
  onDrop(event) {
    this.second = event;
  }
}
