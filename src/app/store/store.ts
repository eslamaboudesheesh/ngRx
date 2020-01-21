import { Action, ActionReducerMap } from '@ngrx/store';
import { Counter, counterReducer } from './reducers/counter.reducer';

export interface StoreInterface {
    counter: Counter
}


export interface customerAction {
    type: string;
    payLoad: any
}


// if i have multi reducer
export const redusers:ActionReducerMap<StoreInterface> = {
    counter:counterReducer
}