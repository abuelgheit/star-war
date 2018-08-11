import { SearchResponse } from './models/searchRes';

export interface AppState {
  readonly people: SearchResponse;
}