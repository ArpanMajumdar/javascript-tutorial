// PRIMITIVE TYPES

// String
const name = 'John Doe'
console.log(typeof name)

// Number
const age = 30
console.log(typeof age)

// Boolean
const hasKids = false
console.log(typeof hasKids)

// Null
const car = null
console.log(typeof car)

// Undefined
let test
console.log(typeof test)

// Symbol
const sym = Symbol()
console.log(typeof sym)

// REFERENCE TYPES

// Arrays
const hobbies = ['movies', 'music']
console.log(typeof hobbies)

// Object literal
const address = {
    city: 'Bangalore',
    pincode: 560045
}
console.log(typeof address)

// TYPE CONVERSION

// Number to String
let val;
val = 5;

console.log(val)
console.log(typeof val)
console.log(val.length) // This returns undefined as numbers do not have any field called length
console.log(String(val).length) // String() function converts Number to String
console.log(typeof String(val))

// Boolean to String
val = String(true)
console.log(typeof val)
console.log(val.length)

// Date to String
val = String(new Date())
console.log(val)
console.log(typeof val)
console.log(val.length)

// Array to String
val = String([1, 2, 3, 4, 5])
console.log(val)
console.log(val.length)

// toString() method can also be used to convert anything to string
console.log((5).toString())

// String to Number
val = Number('4')
console.log(val.toFixed(2))

val = Number(true)
console.log(val)
val = Number(true)
console.log(val)
val = Number(false)
console.log(val)
val = Number(null)
console.log(val)
val = Number('hello') // Gives NaN
console.log(val)

val = parseInt('100.30') // Converts from String to Integer
console.log(val)
val = parseFloat('100.30') // Converts from String to Float
console.log(val)

// TYPE COERSION
let val1 = '5'
let val2 = 6
console.log(val1+val2)






