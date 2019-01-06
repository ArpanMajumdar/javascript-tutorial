// var
var name = 'Arpan Majumdar';
console.log(name);
name = 'Anukritika Jha';
console.log(name);

// Init var
var greeting;
console.log(greeting);
greeting = 'Hello'
console.log(greeting)

/*
Rules for naming variables:
1. Can have letters, numbers, _ and $
2. Cannot start with a number

Conventions:
1. Do not start a variable name with _ or $ apart from some specific cases.
2. Use camel-case for variable naming
*/

var firstName = 'Arpan';

// let
let anotherName = 'Arpan';
console.log(anotherName);
anotherName = 'Anu';
console.log(anotherName);

// const
const constantName = 'Arpan';
console.log(name);
// constantName = 'Anu' //This throws error

/*
In case of constant objects or arrays we cannot reassign them but we 
can still change the data inside them.
*/
const person = {
    name: 'Arpan',
    age: 23
};
console.log(person);

// This is not allowed
// person = {
//     name: 'Anu',
//     age: 22
// }

// But this is allowed
person.name = 'Anu';
console.log(person);

// Same applies for arrays
const someArray = [1, 2, 3, 4, 5];
console.log(someArray);

// This is not allowed
// someArray=[1, 2, 3, 4, 5,6]

// But this is allowed
someArray.push(6);
console.log(someArray);




