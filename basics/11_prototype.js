// Person constructor
function Person(firstName, lastName, dateOfBirth) {
    this.name = firstName;
    this.lastName = lastName;
    this.dateOfBirth = new Date(dateOfBirth);
    // this.getAge = this.getAge = function () {
    //     const diff = Date.now() - this.dateOfBirth.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}

const arpan = new Person('Arpan', 'Majumdar', '7-14-1996');

// Moved getAge field to Prototype
Person.prototype.getAge = function () {
    const diff = Date.now() - this.dateOfBirth.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

Person.prototype.setDateOfBirth = function (newDob) {
    this.dateOfBirth = new Date(newDob);
}

console.log("​arpan", arpan);
console.log('age', arpan.getAge());

arpan.setDateOfBirth('7-31-1996');
console.log("dob", arpan.dateOfBirth);


// Using fields of Object.prototype
console.log(arpan.hasOwnProperty('lastName'));
console.log(arpan.hasOwnProperty('getAge'));






