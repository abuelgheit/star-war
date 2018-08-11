import { Person } from './../models/person';
import { Action } from '@ngrx/store';
import * as PeopleActions from './people.actions'
import { SearchResponse } from '../models/searchRes';

// const initialState: SearchResponse = {
//     count: 1,
//     next: 'next test',
//     previous: 'previous test',
//     results: [
//         {
//             name: 'name test',
//             height: 'height test',
//             homeWorld: 'test',
//             url: 'url test'
//         }
//     ]
// }

export function peopleReducer(state: SearchResponse, action: PeopleActions.Actions) {
    switch(action.type) {
        case PeopleActions.SET_PEOPLE:
            return action.payload;
        case PeopleActions.RESET_PEOPLE:
            return state;
        default:
            return state;
    }
}