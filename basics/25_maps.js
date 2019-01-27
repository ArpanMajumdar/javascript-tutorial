// MAPS: key=>value pairs - Can use any type as key or value

const map1 = new Map();

// Define keys
const key1 = 'some string';
const key2 = {};
const key3 = function () { };

// Set map values
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

console.log(map1.get(key1));
console.log(map1.get(key2));
console.log(map1.get(key3));

// Count key-value pairs
console.log(map1.size);

// Iterating through maps

// Loop using for..of to get key value pairs
for (let [key, value] of map1) {
    console.log(`${key} => ${value}`);
}

// Loop using for..of to get only keys
for (let key of map1.keys()) {
    console.log(`${key}`);
}

// Loop using for..of to get only values
for (let value of map1.values()) {
    console.log(`${value}`);
}

// Convert to arrays
const keyValArr=Array.from(map1);
console.log(keyValArr);

const keyArr=Array.from(map1.keys());
console.log(keyArr);

const valArr=Array.from(map1.values());
console.log(valArr);


