import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
// let docOne: HasFormatter;
// let docTwo: HasFormatter
// docOne = new Invoice('bello', 'web work', 900)
// docTwo = new Payment('azeez', 'website job', 400)
// let docs: HasFormatter[]= []
// docs.push(docOne)
// docs.push(docTwo)
// console.log(docs);
// Interfaces 
// interface IsPerson {
//     name: string,
//     age: number,
//     speak(a: string): void,
//     spend(a: number): number
// }
// const me : IsPerson = { 
//     name: 'azeez',
//     age: 19,
//     speak(text: string): void {
//         console.log(text);
//     },
//     spend(amount: number): number {
//         console.log('i spent', amount);
//         return amount
//     },
// }
// const greetPerson = (person:IsPerson) => {
//     console.log('my name is', person.name);
// }
// greetPerson(me)
// console.log(me); 
// const invOne = new Invoice('azeez', 'for work on design project', 300)
// const invTwo = new Invoice('bello', 'for work on azeez project', 500)
// let invoices : Invoice[] = []
// invoices.push(invOne)
// invoices.push(invTwo)
// invoices.forEach( inv => {
//     console.log(inv.client, inv.amount, inv.format());
// })
// invOne.client = 'mario'
// invOne.amount = 150
// console.log(invOne, invTwo);
// const anchor = document.querySelector('a')!;
// console.log(anchor.href);
const form = document.querySelector(".new-item-form");
// inputs 
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template section 
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let value;
    value = [toFrom.value, details.value, amount.valueAsNumber];
    let docs;
    if (type.value === 'invoice') {
        docs = new Invoice(...value);
    }
    else {
        docs = new Payment(...value);
    }
    list.render(docs, type.value, 'end');
});
// GENERICS
// const addUID = <T extends {name: string}>(obj: T) => {
//     let uid = Math.floor(Math.random() * 100);
//     return {...obj, uid};
// }
// let docOne = addUID({name: 'mario', age: 40});
// console.log(docOne.age);
// // With interfaces
// interface Resource<T> {
//     uid: number;
//     resourceName: string;
//     data: T;
// }
// const docThree: Resource<Object> = {
//     uid: 1,
//     resourceName: 'person',
//     data: {name: 'shaun'}
// }
// const docFour: Resource<string[]> ={
//     uid: 2,
//     resourceName: 'shoppingList',
//     data: ['bread', 'milk', 'toilet roll']
// }
// console.log(docThree, docFour);
// With ENUM
// enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON}
// interface Resource<T> {
//     uid: number;
//     resourceType: ResourceType;
//     data: T;
// }
// const docFive: Resource<Object> = {
//     uid: 1,
//     resourceType: ResourceType.BOOK,
//     data: {name: 'Data Structure and Algorithm'}
// } 
// const docSix: Resource<Object> = {
//     uid: 1,
//     resourceType: ResourceType.DIRECTOR,
//     data: {name: 'azeez'}
// } 
// console.log(docFive, docSix);
// TUPLES 
let arr = ['mario', 55, true];
arr[0] = 'azeez';
arr[1] = true;
arr = [66, false, 'azeez'];
let tup = ['mario', 44, true];
tup[0] = 'food';
tup[1] = 44;
// delyorkcreative.academy
