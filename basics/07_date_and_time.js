const today = new Date();
let val = today;

// Various ways of initializing date
let birthday = new Date('07-14-1996 11:00:00');
birthday = new Date('July 14 1996');
birthday = new Date('07/14/1996');
val = birthday;
console.log(val);


console.log('Today: ' + today)

// Getting various parts of date
val = today.getMonth();
console.log('Current month: ' + val);

val = today.getDate();
console.log('Current date: ' + val);

val = today.getDay();
console.log('Current day: ' + val);

val = today.getFullYear();
console.log('Current month: ' + val);

val = today.getHours();
console.log('Current hours: ' + val);

val = today.getMinutes();
console.log('Current minutes: ' + val);

val = today.getSeconds();
console.log('Current seconds: ' + val);

