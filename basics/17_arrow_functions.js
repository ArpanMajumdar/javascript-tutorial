// Normal JS function

// const sayHello = function () {
//     console.log('Hello');
// }


// Arrow function

// const sayHello = () => { console.log('Hello'); }


// One line functions don't need braces

// const sayHello = () => console.log('Hello');


// One line returns

// const sayHello = () => 'Hello';
// console.log(sayHello());


// Return object (Objects need to be enclosed in parantheses)
// const sayHello = () => ({ msg: 'Hello' })
// console.log(sayHello());


// Single param doesn't need a parantheses
// const sayHello = name => `Hello ${name} ...`;
// console.log(sayHello('Arpan'));


const users = ['Arpan', 'Monirul', 'Sandeep'];
// const nameLengths = users.map(function (user) {
//     return user.length;
// });

const nameLengths = users.map(user => user.length);
console.log(nameLengths);



// sayHello();