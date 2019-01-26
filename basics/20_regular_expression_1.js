let re,rei;
re = /hello/;
rei=/hello/i; // i - Case insensitive flag

console.log(re);
console.log(re.source);

// exec() - Return result in array or null

// let result = re.exec('hello world');
// console.log('​result', result);

// test() - Return boolean if a match is found

// let result=re.test('hello world');
// console.log('​result', result);
// result=re.test('hi world');
// console.log('​result', result);

// match() - Returns result array or null

// let str='Hello there';
// let result = str.match(re);
// console.log('​result', result);
// str='hello there';
// result=str.match(re);
// console.log('​result', result);

// search() - Returns index of first match. If not found returns -1.

// let str='Hello world';
// let result=str.search(rei);
// console.log('​result', result);

// str='Hi world';
// result=str.search(rei);
// console.log('​result', result);

// replace() - Replaces all occurrences of a regex with the specified string
// let str='Hello world';
// let result=str.replace(rei,'Hi');
// console.log('​result', result);








