import { Action, ActionReducerMap } from '@ngrx/store';
import { Counter, counterReducer } from './reducers/counter.reducer';
import { TodoReducer, ToDo, UsersReducer, users } from './reducers/todos.reducer';

export interface StoreInterface {
    counter: Counter,
    todos:ToDo[],
    users: users[]
}


export interface customerAction {
    type: string;
    payLoad: any
}


// if i have multi reducer
export const redusers:ActionReducerMap<StoreInterface> = {
    counter:counterReducer,
    todos : TodoReducer,
    users: UsersReducer
}