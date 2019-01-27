// Destructuring assignment

let a, b;
[a, b] = [100, 200];
console.log(a, b);

// // Rest pattern
[a, b, ...rest] = [100, 200, 300, 400, 500];
console.log(rest);

// Destructuring also applies to objects
({ a, b } = { a: 100, b: 200, c: 300, d: 400 });
console.log(a, b);

// Array destructuring

const people = ['Arpan', 'Moni', 'Sandeep', 'Tejas'];
const [person1, person2, person3, person4] = people;
console.log(person1, person2, person3, person4);

// Array to be destructured can be returned  by a function

function getPeople() {
    return ['Arpan', 'Moni', 'Sandeep', 'Tejas'];
}
const [person1, person2, person3, person4] = getPeople();
console.log(person1, person2, person3, person4);

// Object destructuring
const person = {
    name: 'Arpan',
    age: 22,
    city: 'Bengaluru',
    gender: 'Male',
    sayHello: function(){
        console.log('Hello');
    }
}

// ES5 approach
const name = person.name,
    age = person.age,
    city = person.city;

// Using ES6 destructuring approach
const { name, age, city,sayHello } = person;
console.log(name, age, city);
sayHello();