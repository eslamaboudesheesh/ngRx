import { Action } from '@ngrx/store';
import { Counter } from './reducers/counter.reducer';
 
 export interface StoreInterface {
    counter:Counter
}


export interface customerAction {
    type:string;
    payLoad:any
}
