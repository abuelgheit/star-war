import { Person } from './person';

export interface SearchResponse {
    count: number;
    next: string;
    previous: string;
    results: Array<Person>;
}