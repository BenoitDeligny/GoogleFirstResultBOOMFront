import { Drug } from './drug';
import { User } from './user';

export class Prescription {
  constructor(public author: string, public dateCreation: Date, public user: User, public drugs: Drug[]) { }
}
