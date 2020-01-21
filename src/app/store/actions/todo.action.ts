export const FAILED = '[Todos] FAILED';
export const SUCCESS = '[Todos] SUCCESS';
export const LOAD = '[Todos] load';



export class LoadTodoAction {
    type: string = LOAD
}

export class SuccessActions {
  type: string = SUCCESS
  payLoad: any;
  constructor(payLoad: any) {
    this.payLoad = payLoad;
  }
}

export class FaildActions {
  type: string = FAILED
  payLoad: any;
  constructor(payLoad: any) {
    this.payLoad = payLoad;
  }
}