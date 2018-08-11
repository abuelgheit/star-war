import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageEvent } from '@angular/material';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { Observable, Subscription } from 'rxjs';
import { SearchResponse } from '../../models/searchRes';
import { PeopleService } from '../../services/people.service';
import * as PeopleActions from '../../ngrx/people.actions';


@Component({
  selector: 'app-search-pagination',
  templateUrl: './search-pagination.component.html',
  styleUrls: ['./search-pagination.component.css']
})
export class SearchPaginationComponent implements OnInit, OnDestroy {

  searchRes: Observable<SearchResponse>
  length = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [10];
  subscription: Subscription;
  next: string;
  previous: string;
  
  constructor (
    private store: Store<AppState>,
    private peopleService: PeopleService,
  ) {
    this.searchRes = store.select('people');
    this.searchRes.subscribe(
      res => {
        if (res) {
          this.length = res.count;
          this.next = res.next;
          this.previous = res.previous;
        }
      }
    );

  }

  ngOnInit () {
  }

  ngOnDestroy () {
    this.subscription.unsubscribe();
  }

  setPageSizeOptions (setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  pageEvent (event: PageEvent) {
    if (event.pageIndex > event.previousPageIndex) {
      this.subscription = this.peopleService.searchPeople(this.next.split('=')[1] + '=' + this.next.split('=')[2]).subscribe(
        res => {
          this.store.dispatch(new PeopleActions.SetPeople(res));
        }
      );
    } else if (event.pageIndex < event.previousPageIndex) {
      this.subscription = this.peopleService.searchPeople(this.previous.split('=')[1] + '=' + this.previous.split('=')[2]).subscribe(
        res => {
          this.store.dispatch(new PeopleActions.SetPeople(res));
        }
      );
    }
  }
}
