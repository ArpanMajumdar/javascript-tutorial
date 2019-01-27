// Create a symbol
const sym1 = Symbol();
const sym2 = Symbol('sym2');

console.log(typeof sym2);

// No two symbols are same
console.log(Symbol('123') === Symbol('123')); // This is always false
console.log(`Hello ${String(sym2)}`);

// Symbols are generally used for generating unique object keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};
myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';

// Symbols are not numerable in for..in loop
for(let prop in myObj){
    console.log(`${prop}: ${myObj[prop]}`);
}

// Symbols are ignored by JSON.stringify()
console.log(JSON.stringify(myObj));