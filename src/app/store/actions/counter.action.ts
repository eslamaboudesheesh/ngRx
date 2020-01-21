export const Incrament = '[Counter] increament';
export const Decreament = '[Counter] decreament'
export class IncreamentActions {
  type: string = Incrament
  payLoad: number;
  constructor(payLoad: number) {
    this.payLoad = payLoad;
  }
}

export class decreamentActions {
  type: string = Decreament
  payLoad: number;
  constructor(payLoad: number) {
    this.payLoad = payLoad;
  }
}