import { Action } from '@ngrx/store';
 
 export interface StoreInterface {
    counter:Counter
}

interface Counter
{
    n:number
}
let initalState = {
    n:0
}

export function counterReducer (state = initalState , action: Action) {
     switch (action.type){
         case 'increament' :
              return {
                   n:state.n+1
              }
        case 'dicreament' :
            return {
                n:state.n-1
            }
        default:
            return state
     }
}