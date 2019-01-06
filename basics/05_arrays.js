// Create arrays
const numbers = [23, 4, 5, 53, 55, 22, 58];
const numbers2 = new Array(23, 4, 5, 53, 55, 22, 58);
const fruits = ['Apple', 'Banana', 'Mango', 'Papaya', 'Grapes'];
const mixed = ['Hello', 21, true, null, new Date(), { a: 1, b: 1 }];
console.log(mixed);

let val;

// Get array length
val = numbers.length

// Check if is array
val = Array.isArray(numbers)
console.log(val)
val = Array.isArray('hello')
console.log(val)

// Indexing
val = fruits[3]
console.log(val)

// Insert into array
numbers[2] = 100
console.log(numbers)

// Find index of value
val = fruits.indexOf('Grapes')
console.log(val)

console.log(numbers)

// Add to end
numbers.push(80)
console.log(numbers)

// Add to front
numbers.unshift(90)
console.log(numbers)

// Remove from end
numbers.pop();
console.log(numbers)

// Remove from front
numbers.shift()
console.log(numbers)

// Splice values (start and end indices are inclusive)
numbers.splice(1, 3)
console.log(numbers)

// Reverse
numbers.reverse()
console.log(numbers)

// Concatenate array
numbers3 = numbers.concat(numbers2)
console.log(numbers3)

// Sorting
val = numbers3.sort() // This only sorts the first digits of array
console.log(val)

// Sort using compare function
val = numbers3.sort(function (x, y) {
    return x - y;
})
console.log(val);

// Sort in decreasing order
val = numbers3.sort(function (x, y) {
    return y - x;
})
console.log(val);

function under50(x) {
    return x < 50;
}
// This finds the first number that returns true
console.log(val.find(under50));


