import { customerAction } from '../store';
import { SUCCESS, FAILED } from '../actions/todo.action';
import { createFeatureSelector, createSelector } from '@ngrx/store';


export interface ToDo {
     userId : number,
     id:number,
     title:string,
     completed:boolean
}


// reducer function take to paramter first parmater it's my state and another paramter is Action  it action type
export function TodoReducer(state : ToDo[], action: customerAction) {
    switch (action.type) {
        case SUCCESS:
            return  action.payLoad
            
        case FAILED:
             console.log('error', action.payLoad)
            return  state
            
        default:
            return state
    }
}

