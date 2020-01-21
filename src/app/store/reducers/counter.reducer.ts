import { customerAction } from '../store';
import { Incrament, Decreament } from '../actions/counter.action';
import { createFeatureSelector, createSelector } from '@ngrx/store';


export interface Counter {
    n: number
}
let initalState = {
    n: 0
}

// reducer function take to paramter first parmater it's my state and another paramter is Action  it action type
export function counterReducer(state = initalState, action: customerAction) {
    switch (action.type) {
        case Incrament:
            return {
                n: state.n + action.payLoad
            }
        case Decreament:
            return {
                n: state.n - action.payLoad
            }
        default:
            return state
    }
}

// use selector featuer to arrive to my reducer from store  
// slector help to fetch your state you nead without load all reducer okay!

let counterFs = createFeatureSelector<Counter>('counter') // fetch my reducer 
 export  let nSelector = createSelector(counterFs, s => s.n) // fetch my state from reducer !! 