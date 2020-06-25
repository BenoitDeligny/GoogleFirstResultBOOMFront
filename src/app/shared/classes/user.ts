import { Prescription } from './prescription';

export class User {
  constructor(public firstname?: string,
    public lastname?: string,
    public username?: string,
    public email?: string,
    public birth?: Date,
    public prescriptions?: Prescription[]) { }
}
