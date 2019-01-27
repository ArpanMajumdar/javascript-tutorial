// Store unique values of any type

const set1 = new Set();

// Add values to set

set1.add(100);
set1.add('a string');
set1.add({name: 'Arpan'});
set1.add(true);

console.log(set1);


// Get count
console.log(set1.size);

// Check if a value is in set
console.log(set1.has(100));
console.log(set1.has('a string'));
console.log(set1.has('kJXJXLJ'));
console.log(set1.has(true));

// set.has() doesn't work for objects as it is a reference type
console.log(set1.has({name: 'Arpan'})); // Returns false

// Delete from set
set1.delete(100);
set1.delete(true);

console.log(set1);

// Iterating through sets
for(let item of set1){
    console.log(item);
}

// Convert set to array
const itemArr=Array.from(set1);
console.log(itemArr);

