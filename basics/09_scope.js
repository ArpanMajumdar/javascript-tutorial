// Global scope
var a = 1;
let b = 2;
const c = 3;

// Function scope
// function test() {
//     var a = 4;
//     let b = 5;
//     const c = 6;

//     console.log('Function scope: ', a, b, c);
// }
// test();

// If scope (block scope)
// if (true) {
//     var a = 4; // Change in variable at block level changes var in global scope too
//     let b = 5;
//     const c = 6;

//     console.log('If(block) scope: ', a, b, c);
// }

// Loop(block) scope
for (let b = 0; b < 10; b++) {
    console.log(`Loop: ${b}`)
}

for (var at = 0; b < 10; b++) {
    console.log(`Loop: ${a}`) // a now changes to 10 at the end of loop
}

console.log('Global scope: ', a, b, c);

// Hence always use let and const to avoid weird behaviors

