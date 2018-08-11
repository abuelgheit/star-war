import { SearchResponse } from './../models/searchRes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PeopleService {
  private API_PATH = 'https://swapi.co/api/people/';

  constructor(private http: HttpClient) {}

  searchPeople(queryTitle: string): Observable<SearchResponse> {
    return this.http
      .get<SearchResponse>(`${this.API_PATH}?search=${queryTitle}`);
  }

  retrievePeople(volumeId: string): Observable<SearchResponse> {
    return this.http.get<SearchResponse>(`${this.API_PATH}/${volumeId}`);
  }
}
