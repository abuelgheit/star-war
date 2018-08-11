import { SearchResponse } from './../models/searchRes';
import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'

// Section 2
export const SET_PEOPLE       = '[PEOPLE] Set'
export const RESET_PEOPLE    = '[PEOPLE] Reset'

// Section 3
export class SetPeople implements Action {
    readonly type = SET_PEOPLE

    constructor(public payload: SearchResponse) {}
}

export class ResetPeople implements Action {
    readonly type = RESET_PEOPLE
}

// Section 4
export type Actions = SetPeople | ResetPeople