export const FAILED = '[Todos] FAILED';
export const SUCCESS = '[Todos] SUCCESS';
export const LOAD = '[Todos] load';

export const FAILEDUsers = '[Users] FAILED';
export const SUCCESSUsers = '[Users] SUCCESS';
export const LOADUsers = '[Users] load';




export class LoadUserAction {
  type: string = LOADUsers
}

export class SuccessUsersActions {
type: string = SUCCESSUsers
payLoad: any;
constructor(payLoad: any) {
  this.payLoad = payLoad;
}
}

export class FailedUsersActions {
type: string = FAILEDUsers
payLoad: any;
constructor(payLoad: any) {
  this.payLoad = payLoad;
}
}



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