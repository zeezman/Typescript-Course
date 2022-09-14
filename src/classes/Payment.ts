import { HasFormatter } from "../interfaces/HasFormatter.js";

// classes 
export class Payment implements HasFormatter{ 
    constructor (
        readonly recipients: string,
        private details: string, 
        public amount: number )
     {}

    format (){
        return `${this.recipients} owes ${this.amount} for ${this.details}`
    }
}