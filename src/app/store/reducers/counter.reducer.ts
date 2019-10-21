import { customerAction } from '../store';
import { Incrament, Decreament } from '../actions/counter.action';


export interface Counter
{
    n:number
}
let initalState = {
    n:0
}

export function counterReducer (state = initalState , action: customerAction) {
     switch (action.type){
         case Incrament :
              return {
                   n:state.n+ action.payLoad
              }
        case Decreament :
            return {
                n:state.n- action.payLoad
            }
        default:
            return state
     }
}

