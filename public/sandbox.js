"use strict";
// Function types
// let greet: Function;
const logDetails = (uid, item) => {
    console.log(`${item} has uid of ${uid}`);
};
const greet = (user) => {
    console.log(`${user.name} says hello`);
};
const greetAgain = (user) => {
    console.log(`${user.name} says hello`);
};
// Function alias 
// Example 1
let app;
app = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
app('azeez', 'good morning');
// Example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// Example 3
let logDetail;
logDetail = (ninja) => {
    console.log(`${ninja.name} is going to be ${ninja.age}`);
};
// // // explicit type
// // let character : 'string';
// // let age : number;
// // let isLoggedIn : boolean;
// // age = 44;
// // isLoggedIn = true
// // // array
// // let ninjas : string[] = [];
// // ninjas.push('azeez');
// // // union type 
// // let mixed : (string|number)[] = []
// // mixed.push('azeez')
// // mixed.push(44)
// // // mixed.push(true)
// // console.log(mixed);
// // let uid: string | number
// // uid = 'bello'
// // uid = 66
// // // uid = true
// // // object 
// // let ninjaOne : object
// // ninjaOne = {name: 'mario', age: 66}
// // let ninjaTwo : {
// //   name: string
// //   age : number
// //   beltColor: string
// // }
// // ninjaTwo = {name: 'mario', age: 44, beltColor: 'red' }
// // any types 
// let age: any = 25;
// age = 'mario'
// console.log(age);
// age = true
// console.log(age);
// age = {number: 36}
// console.log(age);
// let mixed: any[] = []
// mixed.push('mario')
// console.log(mixed);
// mixed.push(44)
// console.log(mixed);
// mixed.push(true)
// console.log(mixed);
// let ninja : {name:any, number:any}
// ninja = {name: 'azeez', number: 55}
// console.log(ninja);
// ninja = {name: 66, number: 'mario'}
// console.log(ninja);
// // let character = 'azeez';
// // let age = 20;
// // let isRedBelt = false;
// // // character = 56
// // character = 'bello'
// // // age = 'nba'
// // age = 88 
// // // isRedBelt = 66
// // isRedBelt = true;
// // const circ = (diameter) => {
// //   return diameter * Math.PI;
// // }
// // console.log(circ(55));
// // // arrays
// // let names = ['luigi', 'mario', 'azeez'];
// // // names.push(23)
// // // names[0] = 3;
// // names.push('toad')
// // let numbers = [10, 43, 22];
// // // numbers.push('shaun');
// // // numbers[2] = 'shaun'
// // numbers.push(33)
// // let mixed = ['azeez', 4, 'mario', 8, 9];
// // mixed.push('udd');
// // mixed.push(55);
// // mixed[0] = 4;
// // // objects
// // let ninja = {
// //   name: 'azeez',
// //   belt: 'red',
// //   age: 44
// // }
// // ninja.name = 'mario';
// // ninja.belt = 'black'
// // // ninja.skill = ['lobbing', 'swimming', 'flying']
// // // ninja = {
// // //   name: 'mario',
// // //   belt: 'black',
// // //   age: 88,
// // //   skill: []
// // // }
