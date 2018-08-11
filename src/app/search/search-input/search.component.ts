import { switchMap } from 'rxjs/internal/operators/switchMap';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Action } from '@ngrx/store';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { Subscription } from 'rxjs';
import { SearchResponse } from '../../models/searchRes';
import { PeopleService } from '../../services/people.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import * as PeopleActions from '../../ngrx/people.actions';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  searchInput = new FormControl('');
  subscription: Subscription;

  constructor(
    private peopleService: PeopleService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.subscription = this.searchInput.valueChanges.pipe(
      debounceTime(400),
      switchMap(term => this.peopleService.searchPeople(term))
    ).subscribe(
      res => {
        this.store.dispatch(new PeopleActions.SetPeople(res));
      }
    );
  }

  ngOnDestroy () {
    this.subscription.unsubscribe();
  }
}
