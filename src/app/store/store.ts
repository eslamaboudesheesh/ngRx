import { Action } from '@ngrx/store';
 
 export interface StoreInterface {
    counter:Counter
}

interface Counter
{
    n:number
}
interface customerAction {
    type:string;
    payLoad:any
}
let initalState = {
    n:0
}

const Incrament = 'increament';
const Decreament = 'decreament'

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

export class IncreamentActions {
    type:string = Incrament
    payLoad:number;
    constructor(payLoad:number){
      this.payLoad = payLoad;
    }
}

export class decreamentActions {
    type:string = Decreament
    payLoad:number;
    constructor(payLoad:number){
      this.payLoad = payLoad;
    }
}